import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {SpinnerService} from '../../core/services/spinner.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent implements OnInit {
  isLoading: Observable<boolean>;

  constructor(private spinnerService: SpinnerService) {}

  ngOnInit(): void {
    this.isLoading = this.spinnerService.isLoading;
  }
}
