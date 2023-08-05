import { Component } from '@angular/core';
import { Etudiant } from 'src/app/etudiant';

@Component({
  selector: 'app-consulter-patient',
  templateUrl: './consulter-patient.component.html',
  styleUrls: ['./consulter-patient.component.scss']
})
export class ConsulterPatientComponent {
  etudiant: Etudiant = new Etudiant();
  isDropdownOpen = false;

  time = { hour: 13, minute: 30 };
	spinners = true;

	toggleSpinners() {
		this.spinners = !this.spinners;
	}

  antecedentItems = [
    { id: 1, name: 'Option 1', selected: true },
    { id: 2, name: 'Option 2', selected: false },
    { id: 3, name: 'Option 3', selected: false },
  ];

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
