import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private baseUrl = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) {}

  create(body: { title: string; price: number }): Observable<any> {
    return this.http.post(`${this.baseUrl}/creatProduct`, body, {
      withCredentials: true,
    });
  }

  get(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllProducts`, {
      withCredentials: true,
    });
  }
}
