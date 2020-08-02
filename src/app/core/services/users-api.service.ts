import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../../features/users/user_models';

@Injectable()
export class UsersApiService {
  url = 'https://yalantis-react-school-api.yalantis.com/api/task0/users';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url);
  }
}
