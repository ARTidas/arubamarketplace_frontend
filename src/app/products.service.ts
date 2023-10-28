
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'http://localhost:8080/api/products'

  constructor(
    private http: HttpClient
  ) { }

  
 getProduct(): Observable<any> {
    const url = 'http://localhost:8080/api/products';
    return this.http.get(url);
  }

  getById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }

  getCategory():Observable<any>
  {
    const url = "http://localhost:8080/api/products/categories"
    return this.http.get(url);
  }

  getCategoryItem(category: string):Observable<any>
  {
    const url = `${this.apiUrl}/${category}`;
    return this.http.get(url);
  }

  getProductByName(name: string): Observable<any>
  {
    const url = `${this.apiUrl}/${name}`;
    return this.http.get(url);
  }

}

 
