import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { SignupData } from '../forms/signup/signup.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  LOCAL_URL = '';
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {
    if (!environment.production) {
      this.LOCAL_URL = 'http://localhost:4000';
    }
  }

  signup(name: string, lastName: string, email: string, password: string) {
    return new Promise((resolve, reject) => {
      const body: SignupData = { name, lastName, email, password };
      this.http.post(this.LOCAL_URL + '/api/signup', body)
        .toPromise()
        .then((data) => {
          console.log('estou no then');
          console.log(data);
          this.router.navigate(['/']);
          resolve(data);
        }).catch(error => { console.error(error); reject(error); });
    });
  }

  onRequestComplete() {
    return this.authStatusListener;
  }
}
