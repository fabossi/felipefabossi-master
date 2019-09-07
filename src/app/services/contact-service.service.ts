import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private LOCAL_URL = '';
  showEmail = new Subject<boolean>();
  showSignup = new Subject<boolean>();
  type = new BehaviorSubject<string>('');
  private submitComplete = new BehaviorSubject<string>('');
  status: 'SUCCESS' | '400';

  constructor(private http: HttpClient) {
    if (!environment.production) {
      this.LOCAL_URL = 'http://localhost:4000';
    }
  }

  submitInformations(form) {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();
      this.submitComplete.next('waiting');
      headers.append('Content-Type', 'application/json');
      this.http.post(this.LOCAL_URL + '/api/contact', form, { headers: headers })
        .toPromise()
        .then(data => {
          this.status = 'SUCCESS';
          this.submitComplete.next('ready');
          resolve(data);
        }).catch(error => {
          this.status = '400';
          this.submitComplete.next('error');
          console.error(error);
          reject(error);
        });
    }).catch(error => { console.error(error); });
  }

  public getItemsReady() {
    return this.submitComplete;
  }

  async getEmails() {
    await this.http.get(this.LOCAL_URL + '/api/getEmails')
      .toPromise()
      .then(data => {
        console.table(data);
      }).catch(err => {
        console.error(err);
      });
  }
}
