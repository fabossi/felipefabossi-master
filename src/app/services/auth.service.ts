import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private LOCAL_URL = '';
  private authStatusListener = new BehaviorSubject<string>('');

  constructor(private http: HttpClient, private router: Router) {
    if (!environment.production) {
      this.LOCAL_URL = 'http://localhost:4000';
    }
  }

  signup(form) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.http.post(this.LOCAL_URL + '/api/signup/', form, { headers })
      .subscribe(() => {
        this.router.navigate(['/']);
      }, error => { this.authStatusListener.next('error'); });
  }

  onRequestComplete() {
    return this.authStatusListener;
  }
}
