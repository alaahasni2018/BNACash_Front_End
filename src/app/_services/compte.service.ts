import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
const API = 'http://localhost:3030/comptes/';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http : HttpClient) { }

  addAccount(account : any){
    return this.http.post(API, account);
  }
}
