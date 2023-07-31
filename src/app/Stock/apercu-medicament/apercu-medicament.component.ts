import { Component } from '@angular/core';

@Component({
  selector: 'app-apercu-medicament',
  templateUrl: './apercu-medicament.component.html',
  styleUrls: ['./apercu-medicament.component.scss']
})
export class ApercuMedicamentComponent {
  medicament = {
    "idMedicament":1,
    "nom":"Efferalgant",
    "nomGenerique":"Paracetamol",
    "dosage":500,
    "stockDisponible":20,
    "prixUnitaire":1000,
    "dateExpiration":"28/05/2028",
    "formePharmaceutique":"Comprime"

  }
}
