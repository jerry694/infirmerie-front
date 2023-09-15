import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-creer-medicament',
  templateUrl: './creer-medicament.component.html',
  styleUrls: ['./creer-medicament.component.scss']
})
export class CreerMedicamentComponent {
  minDate!: Date;
  creerMedicament!: FormGroup;
  constructor(private route: Router, private medicamentService: StocksService, private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.minDate = new Date();
    this.creerMedicament = this.formBuilder.group({
      nomMedicament: [null, Validators.required],
      nomGeneriqueMedicament: [null, Validators.required],
      dateExpiration: [null, Validators.required],
      formePharmaceutique: [null, Validators.required],
      dosage: [null, Validators.required],
      quantiteDisponible: [null, Validators.required],
      prixUnitaire: [null, Validators.required],
    })
  }
  antecedentItems = [
    { id: 1, name: 'Option 1', selected: false },
    { id: 2, name: 'Option 2', selected: false },
    { id: 3, name: 'Option 3', selected: false },
  ];

  isDropdownOpen = false;
  creerMedicamentForm() {
    const idInfirmiere = localStorage.getItem('id_infirmiere');

    // Vérifier si l'id_Infirmiere est valide
    if (!idInfirmiere) {
      console.error('id_Infirmiere non trouvé dans le localStorage.');
      return;
    }
    console.log(this.creerMedicament)
    if (this.creerMedicament.controls) {/////////////////////////a revoir
      const formData = this.creerMedicament.value;
      this.medicamentService.creerMedicament(formData, idInfirmiere).subscribe(
        data => {
          alert("Enregistrement réussi !");
          this.route.navigate(["connect/medicament"]);

          //redirection ici
        },
        error => {
          alert("Erreur lors de l'enregistrement.");
        }
      );
    }
  }
  toggleItemSelection(item: any): void {
    item.selected = !item.selected;
  }

  isItemSelected(item: any): boolean {
    return item.selected;
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
