import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class SpinnerService {
  private isLoadingSubject: Subject<boolean> = new Subject<boolean>();
  isLoading = this.isLoadingSubject.asObservable();

  constructor() {
  }

  show() {
    this.isLoadingSubject.next(true);
  }

  hide() {
    this.isLoadingSubject.next(false);
  }
}
