import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apercu-patient',
  templateUrl: './apercu-patient.component.html',
  styleUrls: ['./apercu-patient.component.scss']
})
export class ApercuPatientComponent implements OnInit {
  constructor (private route : ActivatedRoute){}
  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      console.log(data.get('idEtudiant'))
    })
    console.log(this.route)
  }
  etudiant = {
    "idEtudiant":3,
    "matricule": "ABC123",
    "nom": "Dupont",
    "nomContactUrgence": "Martin",
    "relationContactUrgence": "Parent",
    "prenom": "Jean",
    "sexe": "Masculin",
    "dateDeNaissance": "1995-08-15",
    "numeroDeTelephone": "0123456789",
    "numeroDeTelephoneUrgence": "9876543210",
    "numeroWhatsapp": "0123456789",
    "email": "jean.dupont@example.com",
    "addresseInstitutionnelle": "Jean.Dupont@institutsaintjean.org",
    "filiere": "Management",
    "niveau": 2,
    "poids": 70,
    "taille": 175,
    "groupeSanguin": "B",
    "antecedents": [
      { id: 1, name: 'Option 1', selected: true },
      { id: 2, name: 'Option 2', selected: false }
    ],
    "consultations": [
      {date: "1995-08-15", diagnostic: "paludisme ", idConsultation: 1},
      {date: "1995-08-15", diagnostic: "paludisme ", idConsultation: 2}
    ],
    "factures":[
      {date: "1995-08-15", montant: 1300 ,idFacture: 1},]
  }
  exploreConsultation(id:number) {
    console.log("consutation de " + id)
  }
  exploreFacture(id:number) {
    console.log("facture de " + id)
  }

}
