import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {
  LOCAL_URL = '';
  constructor(private http: HttpClient) {
    if (!environment.production) {
      this.LOCAL_URL = 'http://localhost:4000';
    }
  }

  submitInformations(name: string, lastName: String, email: string, message: string) {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders;
      const body = {
        name: name,
        lastName: lastName,
        email: email,
        message: message
      };
      headers.append('Content-type', 'application/json');
      if (body) {
        this.http.post(this.LOCAL_URL + '/api/sendContact/contact', body, { headers: headers });
      }
    });
  }
}
