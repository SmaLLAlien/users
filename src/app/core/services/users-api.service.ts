import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../../features/users/models/user.models';
import {URLS} from '../../appConfig';

@Injectable()
export class UsersApiService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(URLS.users);
  }
}
