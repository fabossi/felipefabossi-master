import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

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

  submitInformations(form) {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();
      this.submitComplete.next('waiting');
      headers.append('Content-Type', 'application/json');
      this.http.post(this.LOCAL_URL + '/api/contact', form, { headers: headers })

        // .pipe(filter((data: any) => {
        //   if (data.name === 'felipe') {
        //     console.log(data);
        //     return data;
        //   }
        // }))

        // FILTER AND MAP OPERATORS

        // .pipe(map((data: any) => {
        //   data.forEach((value, index) => {
        //     data[index].nome = data[index].name;
        //     delete data[index].name;
        //   });
        //   console.log(data);
        //   return data;
        // }))

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
}
