import {BehaviorSubject, of} from 'rxjs';
import {IMonth, IUser} from '../../features/users/models/user.models';

const users: IUser[] = [
  {
    id: '1',
    firstName: 'firstName',
    lastName: 'lastName',
    dob: '2019-09-19T09:34:32.083Z'
  }
];

export class UsersServiceStub {
  private users: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);
  private months: BehaviorSubject<IMonth[]> = new BehaviorSubject<IMonth[]>([]);
  users$ = this.users.asObservable();
  months$ = this.months.asObservable();

  getUsers = () => {
    return of(users);
  }
}
