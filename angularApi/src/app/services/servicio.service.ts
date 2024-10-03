import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioTest {
  private url = "https://api.restful-api.dev/objects"

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(this.url)
  }
}
