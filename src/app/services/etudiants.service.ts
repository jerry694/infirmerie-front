import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../etudiant';
import { configurationBase } from './configurationBase';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {
  private baseUrl = `${configurationBase.baseUrl}Infirmerie-IUSJC/`;
  private accessToken = sessionStorage.getItem('token');
  private httpOptions : any ={
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`
    })
  };
  constructor(private httpClient: HttpClient) { }

  creerEtudiants(etudiant: Etudiant, antecedantMedicauxList: any, autrenouveauxAntecedantsMedicaux: any, idInfirmiere: string): Observable<object> {
    // Si vous avez besoin de vérifier et obtenir l'accessToken, faites-le ici
    // const accessToken = ...
    const nouveauxAntecedantsMedicaux: string[] = autrenouveauxAntecedantsMedicaux
    // Définir les en-têtes de la requête avec le bearer token
    console.log(etudiant);

    // Utilisation des HttpParams pour passer idInfirmiere comme paramètre
    // antecedantMedicauxList=antecedantMedicauxList.join(',');
    const params = { antecedantMedicauxList, nouveauxAntecedantsMedicaux };
    console.log(params)
    return this.httpClient.post(`${this.baseUrl}Etudiant/Ajouter/${idInfirmiere}`, etudiant, { params, ...this.httpOptions });
  }

  listeEtudiants(): Observable<object> {
    return this.httpClient.get(`${this.baseUrl}Etudiant/Listes`, this.httpOptions);
  }
  infoEtudiant(idEtudiant: number): Observable<object> {
    return this.httpClient.get(`${this.baseUrl}Etudiant/Consulter/${idEtudiant}`, this.httpOptions);
  }
  modifierEtudiant(etudiant: Etudiant, idEtudiant: number) {
    console.log(etudiant);
    return this.httpClient.put(`${this.baseUrl}Etudiant/Modifier/${idEtudiant}`, etudiant, this.httpOptions);
  }
  supprimerEtudiant(idEtudiant: number) {
    return this.httpClient.delete(`${this.baseUrl}Etudiant/Supprimer/${idEtudiant}`, this.httpOptions);
  }
  listeAntecedantMedicaux(): Observable<object> {
    return this.httpClient.get(`${this.baseUrl}ListeAntecedantMedicaux`, this.httpOptions);
  }
}