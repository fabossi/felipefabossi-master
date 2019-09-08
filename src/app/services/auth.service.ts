import { Injectable, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { SignupData } from '../forms/signup/signup.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  LOCAL_URL = '';
  errorMessage: string;
  showModal = new Subject<boolean>();
  type = new BehaviorSubject<string>('');
  previousUrl = '';
  requestFinished = new BehaviorSubject<string>('');
  constructor(private http: HttpClient, private router: Router) {
    if (!environment.production) {
      this.LOCAL_URL = 'http://localhost:4000';
    }
  }

  ngOnDestroy() {
    this.showModal.next(false);
  }

  signup(name: string, lastName: string, email: string, password: string) {
    return new Promise((resolve, reject) => {
      const body: SignupData = { name, lastName, email, password };
      this.requestFinished.next('waiting');
      this.http.post(this.LOCAL_URL + '/api/signup', body)
        .toPromise()
        .then((data) => {
          console.log(data);
          this.requestFinished.next('ready');
          this.router.navigate(['/']);
          resolve(data);
        }).catch(error => {
          this.requestFinished.next('error'); reject(error);
        });
    });
  }

  submitInformations(form) {
    return new Promise((resolve, reject) => {
      this.requestFinished.next('waiting');
      this.http.post(this.LOCAL_URL + '/api/contact', form)
        .toPromise()
        .then(data => {
          this.requestFinished.next('ready');
          resolve(data);
        }).catch(error => {
          this.requestFinished.next('error');
          reject(error);
        });
    }).catch(error => { console.error(error); });
  }

  onRequestComplete() {
    return this.requestFinished;
  }
}
