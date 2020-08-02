import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Observable} from 'rxjs';
import {IMonth, IUser} from '../../user_models';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
  users$: Observable<IUser[]>;
  months$: Observable<IMonth[]>;
  filteredUsers: Observable<IUser[]>;
  isHovered = false;
  isLoaded = false;

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.getUsers();
    this.months$ = this.usersService.months$;
    this.users$ = this.usersService.users$;
  }

  getUsers() {
    this.usersService.getUsers()
      .subscribe(() => this.isLoaded = true);
  }

  onHover(monthName: string) {
    this.isHovered = true;
    this.filteredUsers = this.users$.pipe(
      map(users => {
        return users.filter(user => user.month === monthName);
      })
    );
  }
}
