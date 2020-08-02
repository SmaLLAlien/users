import {TestBed} from '@angular/core/testing';

import {UsersApiService} from './users-api.service';
import {HttpClient} from '@angular/common/http';
import {HttpServiceStub} from '../../shared/mocks/httpServiceStub';

describe('UsersApiService', () => {
  let service: UsersApiService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersApiService,
        {provide: HttpClient, useClass: HttpServiceStub}
      ]
    });
    service = TestBed.inject(UsersApiService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getUsers', () => {
    it('should call get method', () => {
      const spy = spyOn(httpClient, 'get');
      service.getUsers();

      expect(spy).toHaveBeenCalled();
    });
  });
});
