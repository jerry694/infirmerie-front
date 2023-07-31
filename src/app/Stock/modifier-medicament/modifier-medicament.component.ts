import { Component } from '@angular/core';

@Component({
  selector: 'app-modifier-medicament',
  templateUrl: './modifier-medicament.component.html',
  styleUrls: ['./modifier-medicament.component.scss']
})
export class ModifierMedicamentComponent {
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
