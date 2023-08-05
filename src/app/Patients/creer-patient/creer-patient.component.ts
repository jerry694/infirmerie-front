import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/etudiant';
import { EtudiantsService } from 'src/app/services/etudiants.service';


@Component({
  selector: 'app-creer-patient',
  templateUrl: './creer-patient.component.html',
  styleUrls: ['./creer-patient.component.scss']
})
export class CreerPatientComponent implements OnInit {
  etudiant: Etudiant = new Etudiant();
  isDropdownOpen = false;

  constructor(private etudiantservice: EtudiantsService) { }

  ngOnInit() {
    
  }

  etudiantform() {
    // Récupérer id_Infirmiere depuis le localStorage
    const idInfirmiere = localStorage.getItem('id_infirmiere');
    
    console.log(this.etudiant)
    // Vérifier si l'id_Infirmiere est valide
    if (!idInfirmiere) {
      console.error('id_Infirmiere non trouvé dans le localStorage.');
      return;
    }

    this.etudiantservice.etudiants(this.etudiant, idInfirmiere).subscribe(
      data => {
        alert("Enregistrement réussi !");
        //redirection ici
      },
      error => {
        alert("Erreur lors de l'enregistrement.");
      }
    );
  }

  antecedentItems = [//A remplacer par un get
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
