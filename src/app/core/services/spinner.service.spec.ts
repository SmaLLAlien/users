import {TestBed} from '@angular/core/testing';

import {SpinnerService} from './spinner.service';

describe('SpinnerService', () => {
  let service: SpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpinnerService]
    });
    service = TestBed.inject(SpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('show', () => {
    it('should call subject with true', () => {
      const spy = spyOn(service['isLoadingSubject'], 'next');
      service.show();

      expect(spy).toHaveBeenCalledWith(true);
    });

    it('should call subject with false', () => {
      const spy = spyOn(service['isLoadingSubject'], 'next');
      service.hide();

      expect(spy).toHaveBeenCalledWith(false);
    });
  });
});
