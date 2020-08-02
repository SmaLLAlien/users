import {TestBed} from '@angular/core/testing';

import {UsersService} from './users.service';
import {UsersApiService} from '../../../core/services/users-api.service';
import {NotificationsService} from '../../../core/services/notifications.service';
import {NotificationsServiceStub} from '../../../shared/mocks/notificationsServiceStub';
import {UserApiServiceStub} from '../../../shared/mocks/userApiServiceStub';
import {IMonth, IUser} from '../user_models';
import {HttpErrorResponse} from '@angular/common/http';

const users: IUser[] = [
  {
    id: '1',
    firstName: 'firstName',
    lastName: 'lastName',
    dob: '2019-09-19T09:34:32.083Z'
  }
];

describe('UsersService', () => {
  let service: UsersService;
  let usersApiService: UsersApiService;
  let notificationsService: NotificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersService,
        {provide: UsersApiService, useClass: UserApiServiceStub},
        {provide: NotificationsService, useClass: NotificationsServiceStub},
      ]
    });
    service = TestBed.inject(UsersService);
    usersApiService = TestBed.inject(UsersApiService);
    notificationsService = TestBed.inject(NotificationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getUsers', () => {
    it('should call onUsersReceived', () => {
      const spy = spyOn<any>(service, 'onUsersReceived');
      service.getUsers().subscribe(() => {
        expect(spy).toHaveBeenCalled();
      });
    });
  });

  describe('onUsersReceived', () => {
    it('should call makeMonthArray', () => {
      const spy = spyOn<any>(service, 'makeMonthArray');
      spyOn<any>(service['users'], 'next');
      spyOn<any>(service['months'], 'next');
      service['onUsersReceived'](users);

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('makeMonthArray', () => {
    it('should add moth to array of months', () => {
      const months: IMonth[] = [
        {month: 'January', usersQuantity: 1}
      ];
      const check = [
        {month: 'January', usersQuantity: 1},
        {month: 'September', usersQuantity: 1},
      ];
      service['makeMonthArray'](months, users[0]);
      const result = months.filter(month => month !== null);

      expect(result).toEqual(check);
    });
  });

  describe('handleError', () => {
    it('should show notification', () => {
      const spy = spyOn(notificationsService, 'error');
      const error = new HttpErrorResponse({error: {message: 'error'}, status: 404});
      service['handleError'](error);

      expect(spy).toHaveBeenCalled();
    });
  });
});
