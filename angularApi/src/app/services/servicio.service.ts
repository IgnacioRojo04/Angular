import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from '../modules/product';

@Injectable({
  providedIn: 'root'
})
export class ServicioTest {
  private url = "https://api.restful-api.dev/objects"

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(this.url)
  }

  addProduct(producto: product): Observable<product>{
    return this.http.post<product>(this.url, producto)
  }

  deleteProduct(productId: number): Observable<void>{
    return this.http.delete<void>(`${this.url}/${productId}`)
  }
}
