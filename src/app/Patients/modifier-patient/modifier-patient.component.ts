import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EtudiantsService } from 'src/app/services/etudiants.service';

@Component({
  selector: 'app-modifier-patient',
  templateUrl: './modifier-patient.component.html',
  styleUrls: ['./modifier-patient.component.scss']
})
export class ModifierPatientComponent implements OnInit {
  maxDate!: Date;
  modifierEtudiantForm!: FormGroup;
  valid=false
  isDropdownOpen = false;
  etudiant: any= {}
  id!: string

  constructor(private route: ActivatedRoute, private etudiantservice: EtudiantsService, private formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      const id = data.get('idEtudiant');
      if (id !== null) {
        this.id = id;
        console.log(this.id)
      } else {
        // Gérer le cas où id est null (si nécessaire)
        console.log('ID étudiant non fourni dans les paramètres de l\'URL.');
      }
      console.log(data.get('idEtudiant'));
      
      this.etudiantservice.infoEtudiant(parseInt(this.id)).subscribe(
        etudiantData => {
          console.log(etudiantData);
          alert(JSON.stringify(etudiantData));
          this.etudiant = etudiantData;
          alert(JSON.stringify(this.etudiant));
          this.initialiseForm()
          //redirection ici
        },
        error => {
          alert("Erreur de lecture.");
        }
      );
    });
    // console.log(this.route)
  }

  initialiseForm(){
    this.maxDate = new Date()
    console.log(this.maxDate.getFullYear())
    this.maxDate.setFullYear(this.maxDate.getFullYear()-14)

    console.log(this.etudiant)
    this.modifierEtudiantForm = this.formBuilder.group({
      // antecedantMedicauxList: [[null]], // Champs tableau avec valeur par défaut
      // bloque: [false], // Aucun validateur requis ici
      // classe: [null, Validators.required], // Aucun validateur requis ici
      dateDeNaissance: [this.etudiant.dateDeNaissance, Validators.required],
      emailEtudiant: [this.etudiant.emailEtudiant, [Validators.required, Validators.email]],
      // emailParent: [null],
      // factures: [[]], // Champs tableau avec valeur par défaut
      // fichesConsultation: [[]], // Champs tableau avec valeur par défaut
      filiere: [this.etudiant.filiere, Validators.required], // Aucun validateur requis ici
      groupeSanguin: [this.etudiant.groupeSanguin], // Aucun validateur requis ici
      matricule: [this.etudiant.matricule, Validators.required], // Aucun validateur requis ici
      niveau: [this.etudiant.niveau, Validators.required], // Aucun validateur requis ici
      nom: [this.etudiant.nom, Validators.required],
      nomContactUrgence: [this.etudiant.nomContactUrgence, Validators.required], // Aucun validateur requis ici
      numeroDeTelephone: [this.etudiant.numeroDeTelephone, [Validators.required]], // Champs numérique avec validation de motif
      numeroDeTelephoneUrgence: [this.etudiant.numeroDeTelephoneUrgence, Validators.required], // Aucun validateur requis ici
      numeroWhatsapp: [this.etudiant.numeroWhatsapp], // Aucun validateur requis ici
      poids: [this.etudiant.poids], // Aucun validateur requis ici
      prenom: [this.etudiant.prenom],
      relationContactUrgence: [this.etudiant.relationContactUrgence, Validators.required], // Aucun validateur requis ici
      sexe: [this.etudiant.sexe, Validators.required], // Aucun validateur requis ici
      taille: [this.etudiant.taille], // Aucun validateur requis ici
    });
  }
  model : any;

  antecedentItems = [
    { id: 1, name: 'Hypertension arterielle', selected: false },
    { id: 2, name: 'Diabete', selected: false },
    { id: 3, name: 'Antecedents de cancer', selected: false },
  ];
  



  modifierEtudiant(){
    const modifiedEtudiant = this.modifierEtudiantForm.value;
    console.log(modifiedEtudiant)
    // Vérifier si l'id_Infirmiere est valide


    this.etudiantservice.modifierEtudiant(modifiedEtudiant,parseInt(this.id)).subscribe(
      data => {
        console.log(data)
        alert("Modification réussi !");
        //redirection ici
      },
      error => {
        alert("Erreur lors de l'enregistrement.");
      }
    );
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
