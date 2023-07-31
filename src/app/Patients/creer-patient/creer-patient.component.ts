import { Component } from '@angular/core';

@Component({
  selector: 'app-creer-patient',
  templateUrl: './creer-patient.component.html',
  styleUrls: ['./creer-patient.component.scss']
})
export class CreerPatientComponent {
model : any;

antecedentItems = [
  { id: 1, name: 'Option 1', selected: false },
  { id: 2, name: 'Option 2', selected: false },
  { id: 3, name: 'Option 3', selected: false },
];

isDropdownOpen = false;

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
