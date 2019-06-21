import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {
  LOCAL_URL = '';
  submitComplete = new BehaviorSubject<string>('waiting');
  constructor(private http: HttpClient) {
    if (!environment.production) {
      this.LOCAL_URL = 'http://localhost:4000';
    }
  }

  submitInformations(name: string, lastName: String, email: string, message: string) {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();
      const body = {
        name: name,
        lastName: lastName,
        email: email,
        message: message
      };
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
      if (body != null || body !== undefined) {
        this.submitComplete.next('waiting');
        this.http.post(this.LOCAL_URL + '/api/contact', body, { headers: headers })
          .toPromise()
          .then(data => {
            if (data != null || data !== undefined) {
              resolve(data);
            }
          }).catch(error => {
            if (error) {
              console.error(error);
              reject(error);
            }
          });
      }
      this.submitComplete.next('ready');
    }).catch(error => console.log(error));
  }

  public getSubmitComplete() {
    if (this.submitComplete != null || this.submitComplete !== undefined) {
      return this.submitComplete;
    }
  }
}
