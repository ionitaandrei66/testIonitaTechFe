import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) {}

  public create(body: {title: string, price: number}): Observable<any> {
    return this.http.post(`${this.baseUrl}/creatProduct`, body, {
      withCredentials: true
    });
  }

  public get(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllProducts`, {
      withCredentials: true
    });
  }
}
