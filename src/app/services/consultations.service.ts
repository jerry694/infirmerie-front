import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ficheConsultation } from 'src/entites/ficheConsultation';
import { configurationBase } from './configurationBase';

@Injectable({
  providedIn: 'root'
})
export class ConsultationsService {
  private baseUrl = `${configurationBase.baseUrl}Infirmerie-IUSJC/`;
  private accessToken = sessionStorage.getItem('token');
  private httpOptions: any = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`,
      // 'Content-Type': 'application/json'
    })
  };
  constructor(private httpClient: HttpClient) { }

  listeConsultation(): Observable<object> {
    return this.httpClient.get(`${this.baseUrl}Fiche_consultation/Liste`, this.httpOptions);
  }
  apercuConsultation(idFicheConsultation: number): Observable<object> {
    return this.httpClient.get(`${this.baseUrl}Fiche_consultation/Consulter/${idFicheConsultation}`, this.httpOptions);
  }
  listeSymptomes(): Observable<object> {
    return this.httpClient.get(`${this.baseUrl}Symptomes/Liste`, this.httpOptions);
  }
  listeDiagnostique(): Observable<object> {
    return this.httpClient.get(`${this.baseUrl}Diagnostiques/Liste`, this.httpOptions);
  }
  listeMedicament(): Observable<object> {
    return this.httpClient.get(`${this.baseUrl}Medicament/Liste`, this.httpOptions);
  }
  listeExamen(): Observable<object> {
    return this.httpClient.get(`${this.baseUrl}Examens/Liste`, this.httpOptions);
  }
  consulter(ficheConsultation: any, idEtudiant: number, idSymptome: any, AnouveauxSymptomes: any, idExamen: any, AnouveauxExamens: any, idDiagnostique: any, AnouveauxDiagnostique: any,idMedicament:any,quantiteMedicamentPrescrite:any,psologieList:string[]): Observable<object> {
    const nouveauxSymptomes: string[] = AnouveauxSymptomes
    const nouveauxExamens: string[] = AnouveauxExamens
    const nouveauxDiagnostique: string[] = AnouveauxDiagnostique
    const posologieList:string[]=psologieList
    console.log(this.httpOptions)
    console.log(ficheConsultation);
    const params = { idSymptome, nouveauxSymptomes, idExamen, nouveauxExamens, idDiagnostique, nouveauxDiagnostique,idMedicament,quantiteMedicamentPrescrite,posologieList };
    console.log(params)
    return this.httpClient.post(`${this.baseUrl}Infirmiere/Ajouter/FicheConsultation/${idEtudiant}/${sessionStorage.getItem('id_infirmiere')}`,ficheConsultation, { params, ...this.httpOptions } );
  }
  suivre(fiche_suivie: any, idFicheConsultation: number, idSymptome: any, AnouveauxSymptomes: any, idExamen: any, AnouveauxExamens: any, idDiagnostique: any, AnouveauxDiagnostique: any,idMedicament:any,quantiteMedicamentPrescrite:any,psologieList:string[]): Observable<object> {
    const nouveauxSymptomes: string[] = AnouveauxSymptomes
    const nouveauxExamens: string[] = AnouveauxExamens
    const nouveauxDiagnostique: string[] = AnouveauxDiagnostique
    const posologieList:string[]=psologieList
    console.log(this.httpOptions)
    console.log(ficheConsultation);
    const params = { idSymptome, nouveauxSymptomes, idExamen, nouveauxExamens, idDiagnostique, nouveauxDiagnostique,idMedicament,quantiteMedicamentPrescrite,posologieList };
    console.log(params)
    return this.httpClient.post(`${this.baseUrl}Fiche_consultation/Ajouter/FicheSuivie/${idFicheConsultation}/${sessionStorage.getItem('id_infirmiere')}`, fiche_suivie,{ params, ...this.httpOptions })
  }
  verifierRendezVous(dateRendezVous:Date,heureRendezVous:Date): Observable<object> {
    const params = { dateRendezVous,heureRendezVous };
    // Fiche_Suivie/verifier/Rendez-Vous
    console.log(params)
    return this.httpClient.get(`${this.baseUrl}Fiche_Suivie/verifier/Rendez-Vous`,{ params, ...this.httpOptions })
  }
}
// .pipe(
//   catchError((error) => {
//       // Gérer l'erreur ici
//       console.error('Erreur lors de la requête HTTP :', error);
//       return throwError(error);
//   })