import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const AUTH_API_LOG = 'http://localhost:3030/image/';
@Injectable({
  providedIn: 'root'
})
export class UploadDocumentService {

  constructor(private http: HttpClient) {
  }

  upload(doc) {
    return this.http.post(AUTH_API_LOG + "upload", doc);
  }

}
