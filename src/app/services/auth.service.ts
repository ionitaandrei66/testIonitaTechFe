import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  login(body: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, body, {
      withCredentials: true,
    });
  }

  checkAuth(): Observable<any> {
    return this.http.get(`${this.baseUrl}/check`, {
      withCredentials: true,
    });
  }
}
