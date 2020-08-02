import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IUser} from '../../models/user.models';

@Component({
  selector: 'app-filtered',
  templateUrl: './filtered.component.html',
  styleUrls: ['./filtered.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredComponent {
  @Input() users: IUser[];
}
