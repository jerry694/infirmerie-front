import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultationsService {
  private baseUrl = "http://localhost:8080/Infirmerie-IUSJC/";
  private accessToken = localStorage.getItem('token');

  constructor(private httpClient: HttpClient) {}

  listeConsultation(): Observable<object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.accessToken}`
      })
    };
    return this.httpClient.get(`${this.baseUrl}Fiche_consultation/Liste`, httpOptions);
  }
}
