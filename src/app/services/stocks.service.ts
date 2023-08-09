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
    return this.httpClient.post(`${this.baseUrl}${idInfirmiere}Medicament/ajout`, medicament, httpOptions);
  }
}
