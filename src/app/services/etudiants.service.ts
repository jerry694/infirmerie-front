import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {
  private baseUrl = "http://localhost:8080/etudiants/";
  private accessToken = localStorage.getItem('token');

  constructor(private httpClient: HttpClient) {}

  etudiants(etudiant: Etudiant, idInfirmiere: string): Observable<object> {
    
    
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
    return this.httpClient.post(`${this.baseUrl}ajouter/${idInfirmiere}`, etudiant, httpOptions);
  }
}
