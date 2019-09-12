import { Injectable, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { SignupData } from '../forms/signup/signup.model';
import { LoginData } from '../forms/login/login.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  private authStatusListener = new Subject<boolean>();
  private isLoggedIn = false;
  private tokenTimer: any;
  private token: string;
  private userId: string;
  private LOCAL_URL = '';
  errorMessage: string;
  previousUrl = '';
  succesfullyMessage: string;
  requestFinished = new BehaviorSubject<string>('');
  type = new BehaviorSubject<string>('');

  constructor(private http: HttpClient, private route: Router) {
    if (!environment.production) {
      this.LOCAL_URL = 'http://localhost:4000';
    }
  }

  ngOnDestroy() {
    this.type.next('');
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresIn');
    localStorage.removeItem('userId');
  }

  private saveAuthData(token: string, expiresIn: Date, userId: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiresIn', expiresIn.toISOString());
    localStorage.setItem('userId', userId);
  }

  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiresIn');
    const userId = localStorage.getItem('userId');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token,
      expirationDate: new Date(expirationDate),
      userId
    };
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isLoggedIn = true;
      this.userId = authInformation.userId;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  onRequestComplete() {
    return this.requestFinished;
  }

  getAuthStatusListener() {
    return this.authStatusListener;
  }

  getIsLoggedIn() {
    return this.isLoggedIn;
  }

  signup(name: string, lastName: string, email: string, password: string) {
    return new Promise((resolve, reject) => {
      const body: SignupData = { name, lastName, email, password };
      this.requestFinished.next('waiting');
      this.http.post<{ message: string }>(this.LOCAL_URL + '/api/signup', body)
        .toPromise()
        .then((data) => {
          this.succesfullyMessage = data.message;
          this.requestFinished.next('ready');
          this.login(email, password);
          resolve(data);
        }).catch(error => {
          this.authStatusListener.next(false);
          this.errorMessage = error.message;
          this.requestFinished.next('error');
          reject(error);
        });
    });
  }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      const body: LoginData = { email, password };
      this.requestFinished.next('waiting');
      this.http.post<{ message: string, token: string, expiresIn: number, userId: string }>(this.LOCAL_URL + '/api/login', body)
        .toPromise()
        .then((data) => {
          const token = data.token;
          this.token = token;
          if (token) {
            const expiresInDuration = data.expiresIn;
            this.setAuthTimer(expiresInDuration);
            this.isLoggedIn = true;
            this.userId = data.userId;
            this.authStatusListener.next(true);
            this.succesfullyMessage = data.message;
            const date = new Date();
            const expirationDate = new Date(date.getTime() + expiresInDuration * 1000);
            this.saveAuthData(token, expirationDate, this.userId);
          }
          this.requestFinished.next('ready');
          resolve(data);
        }).catch(error => {
          this.authStatusListener.next(false);
          this.errorMessage = error.message;
          this.requestFinished.next('error');
          reject(error);
        });
    });
  }

  submitInformations(form) {
    return new Promise((resolve, reject) => {
      this.requestFinished.next('waiting');
      this.http.post<{ message: string }>(this.LOCAL_URL + '/api/contact', form)
        .toPromise()
        .then(data => {
          this.succesfullyMessage = data.message;
          this.requestFinished.next('ready');
          resolve(data);
        }).catch(error => {
          this.errorMessage = error.message;
          this.requestFinished.next('error');
          reject(error);
        });
    }).catch(error => { console.error(error); });
  }

  logout() {
    this.token = null;
    this.isLoggedIn = false;
    this.userId = null;
    clearTimeout(this.tokenTimer);
    this.authStatusListener.next(false);
    this.route.navigate(['/']);
    this.clearAuthData();
  }
}
