import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GetEmailsService {
  local_url = '';
  constructor(private http: HttpClient) {
    !environment.production ? this.local_url = 'http://localhost:4000' : this.local_url = '';
  }

  async getEmails() {
    await this.http.get(this.local_url + '/api/getEmails')
      .toPromise()
      .then(data => {
        console.table(data);
      }).catch(err => {
        console.error(err);
      });
  }
}
