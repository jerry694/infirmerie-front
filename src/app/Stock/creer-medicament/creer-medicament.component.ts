import { Component } from '@angular/core';

@Component({
  selector: 'app-creer-medicament',
  templateUrl: './creer-medicament.component.html',
  styleUrls: ['./creer-medicament.component.scss']
})
export class CreerMedicamentComponent {
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
