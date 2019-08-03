import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {
  LOCAL_URL = '';
  showEmail = new Subject<boolean>();
  submitComplete = new BehaviorSubject<string>('');
  status: 'SUCCESS' | '400';


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
      this.submitComplete.next('waiting');
      headers.append('Content-Type', 'application/json');
      if (body != null || body !== undefined) {
        this.http.post(this.LOCAL_URL + '/api/contact', body, { headers: headers })
          .toPromise()
          .then(data => {
            if (data != null || data !== undefined) {
              this.status = 'SUCCESS';
              this.submitComplete.next('ready');
              resolve(data);
            }
          }).catch(error => {
            if (error) {
              this.status = '400';
              this.submitComplete.next('error');
              console.error(error);
              reject(error);
            }
          });
      }
    }).catch(error => { console.error(error); });
  }

  public getItemsReady() {
    return this.submitComplete;
  }
}
