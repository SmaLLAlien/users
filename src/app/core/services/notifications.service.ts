import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class NotificationsService {

  constructor(private tostr: ToastrService) {
  }

  success(message: string, title: string = null, options = {timeOut: 3000}): void {
    this.tostr.show(message, title, options);
  }

  error(message: string, title: string = null, options = {timeOut: 1000}): void {
    this.tostr.error(message, title, options);
  }
}
