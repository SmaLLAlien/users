import {of} from 'rxjs';
import {IUser} from '../../features/users/user_models';

const users: IUser[] = [
  {
    id: '1',
    firstName: 'firstName',
    lastName: 'lastName',
    dob: '2019-09-19T09:34:32.083Z'
  }
];

export class UserApiServiceStub {
  getUsers = () => {
    return of(users);
  }
}
