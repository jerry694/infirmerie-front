import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-facture',
  templateUrl: './liste-facture.component.html',
  styleUrls: ['./liste-facture.component.scss']
})
export class ListeFactureComponent {
  medicaments = [{
    "idMedicament":1,
    "nom":"Wafo Kamgue Jerry",
    "nomGenerique":"Paracetamol",
    "dosage":500,
    "stockDisponible":20,
    "prixUnitaire":1000,
    "dateExpiration":"28/05/2028"

  },]
  
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
