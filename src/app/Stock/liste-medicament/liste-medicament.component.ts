import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-medicament',
  templateUrl: './liste-medicament.component.html',
  styleUrls: ['./liste-medicament.component.scss']
})
export class ListeMedicamentComponent {
  medicaments = [{
    "idMedicament":1,
    "nom":"Efferalgant",
    "nomGenerique":"Paracetamol",
    "dosage":500,
    "stockDisponible":20,
    "prixUnitaire":1000,
    "dateExpiration":"28/05/2028"

  },]
  
  constructor(private route:Router){}
  creer(){
    this.route.navigate(["medicament/creer"]);
  }
  more(idMedicament:number){
    this.route.navigate(['medicament/apercu',idMedicament]);
  }
  modify(idMedicament:number){
    this.route.navigate(['medicament/modifier',idMedicament]);
  }
  delete(idMedicament:number){
    console.log(idMedicament);
  }
}
