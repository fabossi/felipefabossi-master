import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {
  LOCAL_URL = 'http://localhost:4000';
  submitComplete = new BehaviorSubject<string>('waiting');
  constructor(private http: HttpClient) {
    if (!environment.production) {
      this.LOCAL_URL = 'http://localhost:4000';
    }
  }

  submitInformations(name: string, lastName: String, email: string, message: string) {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json');
      const body = {
        name: name,
        lastName: lastName,
        email: email,
        message: message
      };
      if (body) {
        this.submitComplete.next('waiting');
        this.http.post(this.LOCAL_URL + '/api/contact', body, { headers: headers })
          .toPromise()
          .then(data => {
            if (data != null || data !== undefined) {
              this.submitComplete.next('ready');
              resolve(data);
            } else {
              reject(data);
            }
          }).catch(error => {
            if (error) {
              console.error(error);
              reject(error);
            }
          });
      }
    }).catch(error => console.log(error));
  }

  public getSubmitComplete() {
    if (this.submitComplete != null || this.submitComplete !== undefined) {
      return this.submitComplete;
    }
  }
}
