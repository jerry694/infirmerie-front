import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apercu-facture',
  templateUrl: './apercu-facture.component.html',
  styleUrls: ['./apercu-facture.component.scss']
})
export class ApercuFactureComponent {
  constructor(private route:Router){}
  facture = {
    "idFacture": 4,
    "nom": "Dupont Pierre",
    "statut": "Reglee",
    "montant": 1200,
    "date": "20/06/2028",
    "medicamentPrescrit":[]
  }
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
