import { Component, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cities!: any[];

  formGroup!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.cities = [
      {
          "idAntecedantMedicaux": 1,
          "nomAntecedantMedicaux": "Cancer"
      },
      {
          "va": 2,
          "nomAntecedantMedicaux": "Diabete"
      },]

    this.formGroup = new FormGroup({
      selectedCities: new FormControl<any | null>(null)
    });

    // Écoute les changements dans la liste des villes sélectionnées
    this.formGroup.get('selectedCities')?.valueChanges.subscribe((selectedCities: any | null) => {
      if (selectedCities) {
        const selectedCityCodes = selectedCities.map((city: any) => city.idAntecedantMedicaux);
        console.log('Codes des villes sélectionnées :', selectedCityCodes);
      }
    });
  }
}
