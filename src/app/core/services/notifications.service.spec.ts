import {TestBed} from '@angular/core/testing';

import {NotificationsService} from './notifications.service';
import {ToastrService} from 'ngx-toastr';
import {TostrServiceStub} from '../../shared/mocks/tostrServiceStub';

describe('NotificationsService', () => {
  let service: NotificationsService;
  let tostr: ToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NotificationsService,
        {provide: ToastrService, useClass: TostrServiceStub}
      ]
    });
    service = TestBed.inject(NotificationsService);
    tostr = TestBed.inject(ToastrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('success', () => {
    it('should call show method', () => {
      const spy = spyOn(tostr, 'show');
      service.success('message');

      expect(spy).toHaveBeenCalled();
    });

    it('should call error method', () => {
      const spy = spyOn(tostr, 'error');
      service.error('message');

      expect(spy).toHaveBeenCalled();
    });
  });
});
