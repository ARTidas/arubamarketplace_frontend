import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AmbotService {

  private apiUrl = 'http://localhost:8080/api/hello'


  constructor(
    private http: HttpClient,
  ) { }



  getAnswersById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }
  
}
