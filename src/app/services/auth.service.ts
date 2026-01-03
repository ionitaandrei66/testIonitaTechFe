import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  public login(body: {email: string, password: string}): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, body, {
      withCredentials: true
    });
  }

  public checkAuth(): Observable<any> {
    return this.http.get(`${this.baseUrl}/check`, {
      withCredentials: true
    });
  }
}
