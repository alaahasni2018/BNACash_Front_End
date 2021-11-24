import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../common/user';



const AUTH_API = 'http://localhost:3030/users/';
const AUTH_API_LOG = 'http://localhost:3030/auth/';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user : User): Observable<User> {
    return this.http.post<User>(AUTH_API_LOG + 'login',user);
  }

  verify(Token : string): Observable<string> {
    return this.http.get('http://localhost:3030/users/verif/' + Token, {responseType: 'text'}) ;

  }


  register(user : User): Observable<User> {
    return this.http.post<User>(AUTH_API + 'register',user);

  }
}
