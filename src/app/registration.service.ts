import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Regisztráljuk a szolgáltatást az alkalmazás gyökér moduljához
})
export class RegistrationService {
  constructor(private http: HttpClient) {}



  registerUser(formData: any): Observable<any> {
    // Beállítjuk a megfelelő fejlécet
   
    console.log(formData)
    // Az űrlap adatait elküldjük a szervernek
    return this.http.post('http://localhost:8080/api/register', formData);
  }
}
