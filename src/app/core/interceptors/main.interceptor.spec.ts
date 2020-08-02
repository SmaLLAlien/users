import {TestBed} from '@angular/core/testing';

import {MainInterceptor} from './main.interceptor';
import {SpinnerService} from '../services/spinner.service';
import {SpinnerServiceStub} from '../../shared/mocks/spinnerServiceStub';
import {HttpRequest, HttpResponse} from '@angular/common/http';
import {of} from 'rxjs';

describe('MainInterceptor', () => {
  let spinnerService: SpinnerService;
  let interceptor: MainInterceptor;
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MainInterceptor,
      {provide: SpinnerService, useClass: SpinnerServiceStub}
    ]
  }));

  beforeEach(() => {
    interceptor = TestBed.inject(MainInterceptor);
    spinnerService = TestBed.inject(SpinnerService);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  describe('intercept', () => {
    it('should call show method', () => {
      const spy = spyOn(spinnerService, 'show');
      const url = 'http://www.sample.com';
      const request = new HttpRequest('GET', url);
      const next = {
        handle: () => {
          return of(new HttpResponse());
        }
      };
      interceptor.intercept(request, next);
      expect(spy).toHaveBeenCalled();
    });
  });
});
