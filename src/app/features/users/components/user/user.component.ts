import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IUser} from '../../models/user.models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
  @Input() user: IUser;
}
