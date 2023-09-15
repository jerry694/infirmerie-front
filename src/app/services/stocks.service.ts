import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicament } from 'src/entites/medicament';
import { configurationBase } from './configurationBase';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  private baseUrl = `${configurationBase.baseUrl}Infirmerie-IUSJC/`;
  private accessToken = sessionStorage.getItem('token');
  private httpOptions: any = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`
    })
  };
  constructor(private httpClient: HttpClient) { }

  listeMedicament(): Observable<object> { return this.httpClient.get(`${this.baseUrl}Medicament/Liste`, this.httpOptions); }
  creerMedicament(medicament: Medicament, idInfirmiere: string): Observable<object> {
    console.log(medicament);
    return this.httpClient.post(`${this.baseUrl}Medicament/Ajout/${idInfirmiere}`, medicament, this.httpOptions);
  }
  infoMedicament(idMedicament: number): Observable<object> { return this.httpClient.get(`${this.baseUrl}Medicament/Consulter/${idMedicament}`, this.httpOptions); }
  supprimerMedicament(idMedicament: number) { return this.httpClient.delete(`${this.baseUrl}Medicament/Supprimer/${idMedicament}`, this.httpOptions); }
  modifierMedicament(medicament: any, idMedicament: number) { return this.httpClient.patch(`${this.baseUrl}Medicament/Modifier/${idMedicament}`, medicament, this.httpOptions); }
  listeMedicamentRupture(): Observable<object> { return this.httpClient.get(`${this.baseUrl}Medicament/Liste`, this.httpOptions); }
}
