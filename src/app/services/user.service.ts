import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
