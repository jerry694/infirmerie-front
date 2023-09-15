import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { configurationBase } from './configurationBase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
// http://localhost:8080/Infirmerie-IUSJC/Fiche_consultation/NbrConsultationParAnnee
private baseUrl = `${configurationBase.baseUrl}Infirmerie-IUSJC/`;
private accessToken = sessionStorage.getItem('token');
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
listeMedicamentRupture(): Observable<object> { return this.httpClient.get(`${this.baseUrl}Medicament/Liste`, this.httpOptions); }

// Fiche_Suivie/prochainsRendezVous/Liste
listeProchainRendezVous(): Observable<object> { return this.httpClient.get(`${this.baseUrl}Fiche_Suivie/prochainsRendezVous/Liste`, this.httpOptions); }
}


