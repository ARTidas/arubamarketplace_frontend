import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  
 getProduct(): Observable<any> {
    const url = 'https://fakestoreapi.com/products/categories';
    return this.http.get(url);
  }
}
