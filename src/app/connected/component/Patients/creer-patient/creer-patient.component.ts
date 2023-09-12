import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Etudiant } from 'src/app/etudiant';
import { EtudiantsService } from 'src/app/services/etudiants.service';



@Component({
  selector: 'app-creer-patient',
  templateUrl: './creer-patient.component.html',
  styleUrls: ['./creer-patient.component.scss'],
})
export class CreerPatientComponent implements OnInit {
  // etudiant: Etudiant = new Etudiant();
  // nouveauxAntecedantsMedicaux!:string
  maxDate!: Date;
  creerEtudiant!: FormGroup;
  valid = false
  isDropdownOpen = false;
  selectedNodes: any;
  antecedentItems!: any


  // selectedItems: any[] = []; // Stocke les éléments sélectionnés

  constructor(private route: Router, private etudiantservice: EtudiantsService, private formBuilder: FormBuilder,private messageService:MessageService) { }

  ngOnInit() {
    this.loadAntecedant()
    this.maxDate = new Date()
    console.log(this.maxDate.getFullYear())
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 14)
    // this.formBuilder.group({
    //   idSymptome: new FormControl<any | null>([]),
    //   idExamen: new FormControl<any | null>([]),
    //   idDiagnostique: new FormControl<any | null>([]),
    //   // nouveauxAntecedantsMedicaux: ['', Validators.required], // Aucun validateur requis ici
    //   heureArriveeConsultation: new FormControl([null, Validators.required]),
    //   heureSortieConsultation: new FormControl([null, Validators.required]),
    //   temperature: new FormControl([null]),
    //   poids: new FormControl([null, Validators.required]), // Aucun validateur requis ici
    //   tension: new FormControl([null]), // Aucun validateur requis ici
    // });
    this.creerEtudiant = this.formBuilder.group({
      antecedantMedicauxList: new FormControl<any | null>([]),
      nouveauxAntecedantsMedicaux: [''], // Aucun validateur requis ici
      dateDeNaissance: [null, Validators.required],
      emailEtudiant: [null, [Validators.required, Validators.email]],
      emailContactUrgence: [null, [Validators.required, Validators.email]],
      filiere: [null, Validators.required], // Aucun validateur requis ici
      groupeSanguin: [null, Validators.required], // Aucun validateur requis ici
      matricule: [null, Validators.required], // Aucun validateur requis ici
      niveau: [null, Validators.required], // Aucun validateur requis ici
      nom: [null, [Validators.required]],
      nomContactUrgence: [null, Validators.required], // Aucun validateur requis ici
      numeroDeTelephone: [null, [Validators.required,Validators.minLength(9),Validators.maxLength(9)]], // Champs numérique avec validation de motif
      numeroDeTelephoneUrgence: [null, [Validators.required,Validators.minLength(9),Validators.maxLength(9)]], // Aucun validateur requis ici
      numeroWhatsapp: [null,[,Validators.minLength(9),Validators.maxLength(9)]], // Aucun validateur requis ici
      poids: [null, Validators.required], // Aucun validateur requis ici
      prenom: [null],
      relationContactUrgence: [null, Validators.required], // Aucun validateur requis ici
      sexe: ['Masculin', Validators.required], // Aucun validateur requis ici
      taille: [null, Validators.required], // Aucun validateur requis ici
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


      const idAntecedants = this.creerEtudiant.value.antecedantMedicauxList
      this.creerEtudiant.value.antecedantMedicauxList = []
      const autresAntecedants = this.creerEtudiant.value.nouveauxAntecedantsMedicaux
      console.log(idAntecedants)


      const formData = this.creerEtudiant.value;
      this.etudiantservice.creerEtudiants(formData, idAntecedants, autresAntecedants, idInfirmiere).subscribe(
        data => {
          // alert("Enregistrement réussi !");
          console.log(data)
          this.show("Etudiant "+ this.creerEtudiant.value.nom.toUpperCase() +" "+this.creerEtudiant.value.prenom +" enregistre avec succes","Enregistrement","success")
          this.route.navigate(["patient"]);

          //redirection ici
        },
        error => {
          // alert("Erreur lors de l'enregistrement.");
          console.log(error)
            this.show("Erreur lors de l'enregistrement veuillez reesayez!","Enregistrement","error")
        }
      );
    }
  }



  loadAntecedant() {
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


  show(message:string,tete:string,type:string) {
        this.messageService.add({ severity: type, summary: tete, detail: message, icon:"pi pi-user-edit" });
    }

}