import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-patient',
  templateUrl: './liste-patient.component.html',
  styleUrls: ['./liste-patient.component.scss']
})
export class ListePatientComponent {
  constructor(private route:Router){}
  etudiants = [{
    "idEtudiant":1,
    "matricule": "ABC123",
    "nom": "Ngueutchoua",
    "nomContactUrgence": "Martin",
    "relationContactUrgence": "Parent",
    "prenom": "Jean",
    "sexe": "Masculin",
    "dateDeNaissance": "1995-08-15",
    "numeroDeTelephone": "0123456789",
    "numeroDeTelephoneUrgence": "9876543210",
    "numeroWhatsapp": "0123456789",
    "email": "jean.dupont@example.com",
    "addresseInstitutionnelle":"Jean.Dupont@institutsaintjean.org",
    "filiere":"ISI",
    "niveau":3,
    "poids": 70,
    "taille": 175,
    "groupeSanguin": "B",
    "antecedents" : [
      { id: 1, name: 'Option 1', selected: true },
      { id: 2, name: 'Option 2', selected: false },
      { id: 3, name: 'Option 3', selected: true },
    ]
  },
  {
    "idEtudiant":2,
    "matricule": "ABC123",
    "nom": "Dupont",
    "nomContactUrgence": "Martin",
    "relationContactUrgence": "Parent",
    "prenom": "Jean",
    "sexe": "Feminin",
    "dateDeNaissance": "1995-08-15",
    "numeroDeTelephone": "0123456789",
    "numeroDeTelephoneUrgence": "9876543210",
    "numeroWhatsapp": "0123456789",
    "email": "jean.dupont@example.com",
    "addresseInstitutionnelle":"Jean.Dupont@institutsaintjean.org",
    "filiere":"Management",
    "niveau":2,
    "poids": 70,
    "taille": 175,
    "groupeSanguin": "B",
    "antecedents" : [
      { id: 1, name: 'Option 1', selected: true },
      { id: 2, name: 'Option 2', selected: false },
      { id: 3, name: 'Option 3', selected: true },
    ]
  },
  {
    "idEtudiant":3,
    "matricule": "ABC123",
    "nom": "Dupont Melanchon",
    "nomContactUrgence": "Martin",
    "relationContactUrgence": "Parent",
    "prenom": "Jean",
    "sexe": "Masculin",
    "dateDeNaissance": "1995-08-15",
    "numeroDeTelephone": "0123456789",
    "numeroDeTelephoneUrgence": "9876543210",
    "numeroWhatsapp": "0123456789",
    "email": "jean.dupont@example.com",
    "addresseInstitutionnelle":"Jean.Dupont@institutsaintjean.org",
    "filiere":"Ingenieur",
    "niveau":1,
    "poids": 70,
    "taille": 175,
    "groupeSanguin": "B",
    "antecedents" : [
      { id: 1, name: 'Option 1', selected: true },
      { id: 2, name: 'Option 2', selected: false },
      { id: 3, name: 'Option 3', selected: true },
    ]
  }]
  creer(){
    this.route.navigate(["patient/creer"]);
  }
  more(idEtudiant:number){
    this.route.navigate(['patient/apercu',idEtudiant]);
  }
  modify(idEtudiant:number){
    this.route.navigate(['patient/modifier',idEtudiant]);
  }
  delete(idEtudiant:number){
    console.log(idEtudiant);
  }
  

}
