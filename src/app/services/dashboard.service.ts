import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { configurationBase } from './configurationBase';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
// http://localhost:8080/Infirmerie-IUSJC/Fiche_consultation/NbrConsultationParAnnee
private baseUrl = `${configurationBase.baseUrl}Infirmerie-IUSJC/`;
private accessToken = localStorage.getItem('token');
private httpOptions : any ={
  headers: new HttpHeaders({
    'Authorization': `Bearer ${this.accessToken}`
  })
};

constructor(private httpClient: HttpClient) {}
nbreConsultation(annee:number){
  return this.httpClient.get(`${this.baseUrl}Fiche_consultation/NbrConsultationParAnnee/${annee}`, this.httpOptions);
}
getNbrConsultationParAnneeEtMois(annee:number){
  return this.httpClient.get(`${this.baseUrl}Fiche_consultation/NbrConsultationParAnneeEtMois/${annee}`, this.httpOptions);
}
}
