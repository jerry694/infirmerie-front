import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/etudiant';
import { EtudiantsService } from 'src/app/services/etudiants.service';



@Component({
  selector: 'app-creer-patient',
  templateUrl: './creer-patient.component.html',
  styleUrls: ['./creer-patient.component.scss'],
})
export class CreerPatientComponent implements OnInit {
  // etudiant: Etudiant = new Etudiant();
  maxDate!: Date;
  creerEtudiant!: FormGroup;
  valid=false
  isDropdownOpen = false;
  selectedNodes: any;
  antecedentItems!: any
  items: any[] = [
    { label: 'Élément 1', value: 'element1' },
    { label: 'Élément 2', value: 'element2' },
    { label: 'Élément 3', value: 'element3' },
    // ... Ajoutez plus d'éléments
  ];

  // selectedItems: any[] = []; // Stocke les éléments sélectionnés

  constructor(private route:Router, private etudiantservice: EtudiantsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadAntecedant()
    this.maxDate = new Date()
    console.log(this.maxDate.getFullYear())
    this.maxDate.setFullYear(this.maxDate.getFullYear()-14)

    this.creerEtudiant = this.formBuilder.group({
      // antecedantMedicauxList: [[]], // Champs tableau avec valeur par défaut
      antecedantMedicauxList: this.formBuilder.array([], [Validators.required]),
      // bloque: [false], // Aucun validateur requis ici
      // classe: [null, Validators.required], // Aucun validateur requis ici
      dateDeNaissance: [null, Validators.required],
      emailEtudiant: [null, [Validators.required, Validators.email]],
      emailContactUrgence: [null],
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

  onCheckboxChange(e: any,check:string) {
    const checkArray: FormArray = this.creerEtudiant.get(check) as FormArray
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value))
    } else {
      let i: number = 0
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value){
          checkArray.removeAt(i)
        return
        }
        i++
      })
    }
  }

loadAntecedant(){
  this.etudiantservice.listeAntecedantMedicaux().subscribe(
    data => {
      console.log(data)
      this.antecedentItems = data
      //redirection ici
    },
    error => {
      alert("Erreur de lecture.");
    }
  );
}

  toggleItemSelection(item: any): void {
    item.selected = !item.selected;
  }

  isItemSelected(item: any): boolean {
    return item.selected;
  }



}