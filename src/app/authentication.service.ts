import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Authentication {
  private serverUrl = 'http://localhost:80/api/login/log';
  private isAuthenticated = false;
  private userData$: Observable<any> = of(null);



  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    return this.http.post(this.serverUrl, loginData, { headers }).pipe(
      tap((response: any) => {
        this.isAuthenticated = true;
        this.userData$ = of(response); // Módosítottuk, hogy az egész válaszobjektumot tároljuk
      })
    );
  }
  

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getUserData(): Observable<any> {
    if (this.isAuthenticated) {
      return this.userData$; // Ha be vagy jelentkezve, adjuk vissza az adatokat
    } else {
      return of(null); // Ha nincs bejelentkezve, adjunk vissza null-t vagy egy üres értéket
    }
  }
}
