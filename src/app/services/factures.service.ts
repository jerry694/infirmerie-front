import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturesService {
  private baseUrl = "http://localhost:8080/Infirmerie-IUSJC/";
  private accessToken = localStorage.getItem('token');

  constructor(private httpClient: HttpClient) {}

  listeFacture(): Observable<object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.accessToken}`
      })
    };
    // Facture/RegleFacture/{{NumFacture}}
    return this.httpClient.get(`${this.baseUrl}Facture/Liste`, httpOptions);
  }
  reglerFacture(idFacture:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.accessToken}`
      })
    };

    return this.httpClient.delete(`${this.baseUrl}Facture/RegleFacture/${idFacture}`, httpOptions);
  }
  infoFacture(idFacture:number): Observable<object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.accessToken}`
      })
    };
    // http://localhost:8080/Infirmerie-IUSJC/Facture/Consulter/{{NumFacture}}
    // console.log(`${this.baseUrl}Etudiant/${idEtudiant}`, httpOptions)
    return this.httpClient.get(`${this.baseUrl}Facture/Consulter/${idFacture}`, httpOptions);
  }
}
