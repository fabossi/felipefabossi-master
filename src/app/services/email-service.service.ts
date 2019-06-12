import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {
  LOCAL_URL = 'http://localhost:4000';
  constructor(private http: HttpClient) {
    if (!environment.production) {
      this.LOCAL_URL = 'http://localhost:4000';
    }
  }

  submitInformations(name: string, lastName: String, email: string, message: string) {
    console.log('` aqui.');
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json');
      const body = {
        name: name,
        lastName: lastName,
        email: email,
        message: message
      };
      if (body) {
        console.log(body);
        this.http.post(this.LOCAL_URL + '/api/contact', body, { headers: headers })
          .toPromise()
          .then(data => {
            if (data) {
              console.log('data => ' + data);
              resolve(data);
            }
          }).catch(error => {
            if (error) {
              console.log('ERROR ' + error);
              reject(error);
            }
          });
      }
    });
  }
}
