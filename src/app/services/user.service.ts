import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private LOCAL_URL = '';

  constructor(private http: HttpClient) {
    if (!environment.production) {
      this.LOCAL_URL = 'http://localhost:4000';
    }
  }

  getUserInformation(id: string) {
    return this.http
      .get<{ _id: string, name: string, lastName: string, email: string }>(this.LOCAL_URL + '/api/contact/' + id);
  }

  getHtmlFile() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      responseType: 'blob' as 'json'
    };
    return this.http
      .get(this.LOCAL_URL + '/api/downloadHTML', httpOptions).toPromise();
  }

  getJSFile() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      responseType: 'blob' as 'json'
    };
    return this.http
      .get(this.LOCAL_URL + '/api/downloadJS', httpOptions).toPromise();
  }
  getCSSFile() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      responseType: 'blob' as 'json'
    };
    return this.http
      .get(this.LOCAL_URL + '/api/downloadCSS', httpOptions).toPromise();
  }

  createFolderFiles() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(this.LOCAL_URL + '/api/files', httpOptions).toPromise();
  }
}
