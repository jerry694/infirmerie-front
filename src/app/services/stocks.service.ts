import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicament } from 'src/entites/medicament';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  private baseUrl = "http://localhost:8080/Infirmerie-IUSJC/";
  private accessToken = localStorage.getItem('token');

  constructor(private httpClient: HttpClient) {}

  listeMedicament(): Observable<object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.accessToken}`
      })
    };
    return this.httpClient.get(`${this.baseUrl}Medicament/Liste`, httpOptions);
  }
  creerMedicament(medicament: Medicament, idInfirmiere: string): Observable<object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.accessToken}`
      })
    };

    console.log(medicament);
    return this.httpClient.post(`${this.baseUrl}Medicament/Ajout/${idInfirmiere}`, medicament, httpOptions);
  }
  infoMedicament(idMedicament:number): Observable<object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.accessToken}`
      })
    };
    // Medicament/Consulter/{{idMedicament}}
    // console.log(`${this.baseUrl}Etudiant/${idEtudiant}`, httpOptions)
    return this.httpClient.get(`${this.baseUrl}Medicament/Consulter/${idMedicament}`, httpOptions);
  }
  supprimerMedicament(idMedicament:number){
    // http://localhost:8080/Infirmerie-IUSJC/Medicament/Supprimer/
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.accessToken}`
      })
    };
    return this.httpClient.delete(`${this.baseUrl}Medicament/Supprimer/${idMedicament}`, httpOptions);
  }
  modifierMedicament(medicament:any , idMedicament:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.accessToken}`
      })
    };
    return this.httpClient.put(`${this.baseUrl}Medicament/Modifier/${idMedicament}`,medicament, httpOptions);
  }
  listeMedicamentRupture(): Observable<object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.accessToken}`
      })
    };
    return this.httpClient.get(`${this.baseUrl}Medicament/Liste`, httpOptions);
  }
}
