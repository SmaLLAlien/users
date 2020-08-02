import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IUser} from '../../user_models';

@Component({
  selector: 'app-filtered',
  templateUrl: './filtered.component.html',
  styleUrls: ['./filtered.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredComponent {
  @Input() users: IUser[];

}
