import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SpinnerService} from '../services/spinner.service';
import {finalize} from 'rxjs/operators';
import {URLS} from '../../appConfig';

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor(private spinnerService: SpinnerService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.show();
    const modifiedReq = request.clone({
      url: `${URLS.base}${URLS.users}`
    });

    return next.handle(modifiedReq).pipe(
      finalize(() => {
        this.spinnerService.hide();
      })
    );
  }
}
