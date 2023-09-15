import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { configurationBase } from './configurationBase';

@Injectable({
  providedIn: 'root'
})
export class FacturesService {
  private baseUrl = `${configurationBase.baseUrl}Infirmerie-IUSJC/`;
  private accessToken = sessionStorage.getItem('token');
  private httpOptions : any ={
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`
    })
  };
  constructor(private httpClient: HttpClient) {}

  listeFacture(): Observable<object> {
    // Facture/RegleFacture/{{NumFacture}}
    return this.httpClient.get(`${this.baseUrl}Facture/Liste`, this.httpOptions);
  }
  reglerFacture(idFacture:number){
    return this.httpClient.delete(`${this.baseUrl}Facture/RegleFacture/${idFacture}`, this.httpOptions);
  }
  infoFacture(idFacture:number): Observable<object> {
    // http://localhost:8080/Infirmerie-IUSJC/Facture/Consulter/{{NumFacture}}
    // console.log(`${this.baseUrl}Etudiant/${idEtudiant}`, httpOptions)
    return this.httpClient.get(`${this.baseUrl}Facture/Consulter/${idFacture}`, this.httpOptions);
  }
  listeFacturenonReglee(): Observable<object> {
    // Facture/RegleFacture/{{NumFacture}}
    return this.httpClient.get(`${this.baseUrl}Facture/non-reglees`, this.httpOptions);
  }
  imprimerFacture(idFacture:number){
    // Infirmiere/Imprimer/Facture/{{numFacture}}
    return this.httpClient.get(`${this.baseUrl}Infirmiere/Imprimer/Facture/${idFacture}`, this.httpOptions);

  }
  // Facture/non-reglees
}
