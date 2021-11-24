import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const API_URL = 'http://localhost:3030/users/';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getCurrentUser(): Observable<any> {
    return this.http.get(API_URL + 'currentUser', { responseType: 'text' });
  }

  public isConnected() {
    if (window.sessionStorage.getItem(USER_KEY)) {
      return true;
    }
    return false;
  }
}
