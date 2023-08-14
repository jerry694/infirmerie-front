import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {
  private baseUrl = "http://localhost:8080/Infirmerie-IUSJC/";
  private accessToken = localStorage.getItem('token');

  constructor(private httpClient: HttpClient) {}

  creerEtudiants(etudiant: Etudiant, idInfirmiere: string): Observable<object> {
    
    
    // Vérifier si le jeton d'accès est présent dans le localStorage
    // if (!accessToken) {
    //   console.error('Le jeton d\'accès n\'a pas été trouvé dans le localStorage.');
    //   return;
    // }

    // Définir les en-têtes de la requête avec le bearer token
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.accessToken}`
      })
    };

    console.log(etudiant);
    return this.httpClient.post(`${this.baseUrl}Etudiant/Ajouter/${idInfirmiere}`, etudiant, httpOptions);
  }
  listeEtudiants(): Observable<object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.accessToken}`
      })
    };
    return this.httpClient.get(`${this.baseUrl}Etudiant/Listes`, httpOptions);
  }
  infoEtudiant(idEtudiant:number): Observable<object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.accessToken}`
      })
    };
    // http://localhost:8080/Infirmerie-IUSJC/Facture/Consulter/{{NumFacture}}
    // console.log(`${this.baseUrl}Etudiant/${idEtudiant}`, httpOptions)
    return this.httpClient.get(`${this.baseUrl}Etudiant/Consulter/${idEtudiant}`, httpOptions);
  }
  modifierEtudiant(etudiant: Etudiant,idEtudiant:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.accessToken}`
      })
    };

    console.log(etudiant);
    return this.httpClient.put(`${this.baseUrl}Etudiant/Modifier/${idEtudiant}`, etudiant, httpOptions);
  }
  supprimerEtudiant(idEtudiant:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.accessToken}`
      })
    };

    return this.httpClient.delete(`${this.baseUrl}Etudiant/Supprimer/${idEtudiant}`, httpOptions);
  }
  listeAntecedantMedicaux(): Observable<object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.accessToken}`
      })
    };
    return this.httpClient.get(`${this.baseUrl}ListeAntecedantMedicaux`, httpOptions);
  }
}