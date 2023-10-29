import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private registrationUrl = 'http://localhost:80/api/registration/register'; // The server-side registration route for your application
  private loginUrl = "https://localhost:80/api/userlogin/login";
  constructor(private http: HttpClient) {}

  register(email: string, password: string): Observable<any> {
    const data = { email, password, passwordConfirmation: password };
    return this.http.post(this.registrationUrl, data);
  }

 
}