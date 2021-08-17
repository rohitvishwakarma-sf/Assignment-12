import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { baseURL } from './globals';
import { IUSERCRUD } from './IUSERCRUD';
import { User } from './user.model';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService implements IUSERCRUD<User> {
  usersChanged = new EventEmitter<User[]>();
  users: User[] = [];
  constructor(private http: HttpClient) {}

  // fetch users
  async getUsers(): Promise<User[]> {
    const url = `${baseURL}/users?filter[include][]=customer&filter[include][]=roles`;
    this.users = await this.http.get<User[]>(url).toPromise();
    return this.users.slice();
  }

  // create new user
  createUser(obj: User): void {
    throw new Error('Method not implemented.');
  }

  // deleting user
  deleteUser(user: User): Observable<any> {
    const url = `${baseURL}/users/${user.id}`;
    return this.http.delete<string>(url).pipe(
      map(() => {
        const index = this.users.findIndex((u) => u.id === user.id);
        this.users.splice(index, 1);
        this.usersChanged.emit(this.users.slice());
      })
    );
  }

  // update user
  saveUser(obj: User): Observable<any> {
    const url = `${baseURL}/users/${obj.id}`;
    const user = {
      ...obj,
      customer: undefined,
      roles: undefined,
      createdOn: undefined,
      modifiedOn: undefined,
    };

    return this.http.patch(url, user);
  }
}
