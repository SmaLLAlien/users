import {Subject} from 'rxjs';

export class SpinnerServiceStub {
  private isLoadingSubject: Subject<boolean> = new Subject<boolean>();
  isLoading = this.isLoadingSubject.asObservable();
  show = () => {
  }
  hide = () => {
  }
}
