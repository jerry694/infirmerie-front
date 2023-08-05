import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifier-patient',
  templateUrl: './modifier-patient.component.html',
  styleUrls: ['./modifier-patient.component.scss']
})
export class ModifierPatientComponent implements OnInit {
  constructor (private route : ActivatedRoute){}
  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      console.log(data.get('idEtudiant'))
    })
    console.log(this.route)
  }
  model : any;

etudiant = {
  "matricule": "ABC123",
  "nom": "Dupont",
  "nomContactUrgence": "Martin",
  "relationContactUrgence": "Parent",
  "prenom": "Jean",
  "sexe": "Masculin",
  "dateDeNaissance": "1995-08-15",
  "numeroDeTelephone": "0123456789",
  "numeroDeTelephoneUrgence": "9876543210",
  "numeroWhatsapp": "0123456789",
  "email": "jean.dupont@example.com",
  "addresseInstitutionnelle":"Jean.Dupont@institutsaintjean.org",
  "filiere":"Management",
  "niveau":2,
  "poids": 70,
  "taille": 175,
  "groupeSanguin": "B",
  "antecedents" : [
    { id: 1, name: 'Option 1', selected: true },
    { id: 2, name: 'Option 2', selected: false },
    { id: 3, name: 'Option 3', selected: true },
  ]
}


  antecedentItems = [
    { id: 1, name: 'Hypertension arterielle', selected: false },
    { id: 2, name: 'Diabete', selected: false },
    { id: 3, name: 'Antecedents de cancer', selected: false },
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
