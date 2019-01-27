import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(username: string, lastname: string, password: string) {
    return this.http
      .post<any>('http://192.168.0.102:4000/users/authenticate', {
        Firstname: username,
        Lastname: lastname,
        Password: password
      })
      .pipe(
        map(user => {
          console.warn(user);
          if (user && user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
          }

          return user;
        })
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
