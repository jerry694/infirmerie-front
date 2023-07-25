import { Component } from '@angular/core';

@Component({
  selector: 'app-creer-patient',
  templateUrl: './creer-patient.component.html',
  styleUrls: ['./creer-patient.component.scss']
})
export class CreerPatientComponent {
  options = [
    { id: 1, label: 'Option 1', checked: false },
    { id: 2, label: 'Option 2', checked: false },
    // Ajouter d'autres options ici...
  ];
}
