import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-facture',
  templateUrl: './liste-facture.component.html',
  styleUrls: ['./liste-facture.component.scss']
})
export class ListeFactureComponent {
    factures = [{
      "idFacture":1,
      "nom":"Wafo Kamgue Jerry",
      "statut":"Reglee",
      "montant":1000,
      "date":"28/05/2028"

    }, {
      "idFacture": 2,
      "nom": "Doe John",
      "statut": "Non Reglee",
      "montant": 500,
      "date": "15/06/2028"
    },
    {
      "idFacture": 3,
      "nom": "Smith Jane",
      "statut": "Non Reglee",
      "montant": 750,
      "date": "10/06/2028"
    },
    {
      "idFacture": 4,
      "nom": "Dupont Pierre",
      "statut": "Reglee",
      "montant": 1200,
      "date": "20/06/2028"
    }]
  
  constructor(private route:Router){}

  more(idMedicament:number){
    this.route.navigate(['facture/apercu',idMedicament]);
  }
  cash(idMedicament:number){
    // this.route.navigate(['medicament/modifier',idMedicament]);
    console.log(idMedicament)
  }
  delete(idMedicament:number){
    console.log(idMedicament);
  }
}
