import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module';

@Component({
  selector: 'app-liste-facture',
  templateUrl: './liste-facture.component.html',
  styleUrls: ['./liste-facture.component.scss']
})
export class ListeFactureComponent {
	model!: NgbDateStruct;
  dropdownItems = [
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


