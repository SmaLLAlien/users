import {Injectable} from '@angular/core';
import {UsersApiService} from '../../../core/services/users-api.service';
import {catchError, map, tap} from 'rxjs/operators';
import {IMonth} from '../models/month.model';
import {IUser} from '../models/user.models';
import {BehaviorSubject, EMPTY, of, throwError} from 'rxjs';
import {NotificationsService} from '../../../core/services/notifications.service';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class UsersService {
  private users: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);
  private months: BehaviorSubject<IMonth[]> = new BehaviorSubject<IMonth[]>([]);
  users$ = this.users.asObservable();
  months$ = this.months.asObservable();

  constructor(private usersApiService: UsersApiService,
              private notificationsService: NotificationsService) {}

  getUsers() {
    return this.usersApiService.getUsers().pipe(
      map((users: IUser[]) => this.onUsersReceived(users)),
      tap(() => this.notificationsService.success('Users loaded successfully')),
      catchError(this.handleError)
    );
  }

  private onUsersReceived(users: IUser[]): IUser[] {
    let months = [];
    users.map((user: IUser) => this.makeMonthArray(months, user));
    months = months.filter(month => month !== null);
    this.users.next(users);
    this.months.next(months);

    return users;
  }

  private makeMonthArray(months: IMonth[], user: IUser): IUser {
    const date = new Date(user.dob);
    const month = date.toLocaleString('en', {month: 'long'});
    const monthNumber = date.getMonth();

    if (months[monthNumber]) {
      months[monthNumber].usersQuantity++;
    } else {
      months[monthNumber] = {month, usersQuantity: 1};
    }
    user.month = month;

    return user;
  }

  private handleError = (error: HttpErrorResponse) => {
    if (error && error.message) {
      this.notificationsService.error(error.message);

      return of(EMPTY);
    }

    return throwError(error);
  }
}
