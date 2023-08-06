import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/etudiant';
import { EtudiantsService } from 'src/app/services/etudiants.service';


@Component({
  selector: 'app-creer-patient',
  templateUrl: './creer-patient.component.html',
  styleUrls: ['./creer-patient.component.scss']
})
export class CreerPatientComponent implements OnInit {
  // etudiant: Etudiant = new Etudiant();
  creerEtudiant!: FormGroup;
  valid=false
  isDropdownOpen = false;

  constructor(private route:Router, private etudiantservice: EtudiantsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.creerEtudiant = this.formBuilder.group({
      // antecedantMedicauxList: [[null]], // Champs tableau avec valeur par défaut
      // bloque: [false], // Aucun validateur requis ici
      // classe: [null, Validators.required], // Aucun validateur requis ici
      dateDeNaissance: [null, Validators.required],
      emailEtudiant: [null, [Validators.required, Validators.email]],
      // emailParent: [null],
      // factures: [[]], // Champs tableau avec valeur par défaut
      // fichesConsultation: [[]], // Champs tableau avec valeur par défaut
      filiere: [null, Validators.required], // Aucun validateur requis ici
      groupeSanguin: [null], // Aucun validateur requis ici
      matricule: [null, Validators.required], // Aucun validateur requis ici
      niveau: [null, Validators.required], // Aucun validateur requis ici
      nom: [null, Validators.required],
      nomContactUrgence: [null, Validators.required], // Aucun validateur requis ici
      numeroDeTelephone: [null, [Validators.required]], // Champs numérique avec validation de motif
      numeroDeTelephoneUrgence: [null, Validators.required], // Aucun validateur requis ici
      numeroWhatsapp: [null], // Aucun validateur requis ici
      poids: [null], // Aucun validateur requis ici
      prenom: [null],
      relationContactUrgence: [null, Validators.required], // Aucun validateur requis ici
      sexe: [null, Validators.required], // Aucun validateur requis ici
      taille: [null], // Aucun validateur requis ici
    });
  }

  etudiantform() {
    // this.valid=true
    // Récupérer id_Infirmiere depuis le localStorage
    const idInfirmiere = localStorage.getItem('id_infirmiere');
    
    // Vérifier si l'id_Infirmiere est valide
    if (!idInfirmiere) {
      console.error('id_Infirmiere non trouvé dans le localStorage.');
      return;
    }
    console.log(this.creerEtudiant)
    if (this.creerEtudiant.controls) {/////////////////////////a revoir
      const formData = this.creerEtudiant.value;
      this.etudiantservice.creerEtudiants(formData, idInfirmiere).subscribe(
      data => {
        alert("Enregistrement réussi !");
      this.route.navigate(["patient"]);

        //redirection ici
      },
      error => {
        alert("Erreur lors de l'enregistrement.");
      }
    );
    }

    
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
