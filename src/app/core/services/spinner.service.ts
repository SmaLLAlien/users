import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class SpinnerService {
  private isLoadingSubject: Subject<boolean> = new Subject<boolean>();
  isLoading = this.isLoadingSubject.asObservable();

  show(): void {
    this.isLoadingSubject.next(true);
  }

  hide(): void {
    this.isLoadingSubject.next(false);
  }
}
