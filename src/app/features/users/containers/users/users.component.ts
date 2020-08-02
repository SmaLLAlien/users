import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Observable} from 'rxjs';
import {IUser} from '../../models/user.models';
import {IMonth} from '../../models/month.model';
import {map, takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit, OnDestroy {
  users$: Observable<IUser[]>;
  months$: Observable<IMonth[]>;
  filteredUsers: Observable<IUser[]>;
  isHovered = false;
  isLoaded = false;
  alive = true;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
    this.months$ = this.usersService.months$;
    this.users$ = this.usersService.users$;
  }

  getUsers(): void {
    this.usersService.getUsers()
      .subscribe(() => this.isLoaded = true);
  }

  onHover(monthName: string): void {
    this.isHovered = true;
    this.filteredUsers = this.users$.pipe(
      takeWhile(() => this.alive),
      map(users => users.filter(user => user.month === monthName))
    );
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
