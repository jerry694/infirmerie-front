import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  rootURL = `${environment.api}`;

  constructor(private http : HttpClient) { }

  login(userData: any): Observable<any>{
    return this.http.post<any>(`${this.rootURL}login`, userData);
  }

  signOut(data: any): Observable<any> {
    return this.http.post<any>(`${this.rootURL}logOut.php`, data);
  }
}
