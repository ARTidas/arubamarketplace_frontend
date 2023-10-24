
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

const products =  [
  {
    id: 1,
    name: 'Termék 1',
    price: 10.99,
    description: 'Ez egy példa termék.'
  },
  {
    id: 2,
    name: 'Termék 2',
    price: 19.99,
    description: 'Ez egy másik példa termék.'
  },
  {
    id: 3,
    name: 'Termék 3',
    price: 69.99,
    description: 'Ez egy példa termék.',
  },
  {
    id: 4,
    name: 'Termék 4',
    price: 99.99,
    description: 'Ez egy példa termék.',
  },

  // Itt további termékeket adhat hozzá
];



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'https://fakestoreapi.com/products'

  constructor(
    private http: HttpClient
  ) { }

  
 getProduct(): Observable<any> {
    const url = 'https://fakestoreapi.com/products';
    return this.http.get(url);
  }

  getById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }

}

