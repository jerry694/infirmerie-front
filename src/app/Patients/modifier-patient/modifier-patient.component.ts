import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Etudiant } from 'src/app/etudiant';
import { EtudiantsService } from 'src/app/services/etudiants.service';

@Component({
  selector: 'app-modifier-patient',
  templateUrl: './modifier-patient.component.html',
  styleUrls: ['./modifier-patient.component.scss']
})
export class ModifierPatientComponent implements OnInit {
  maxDate!: Date;
  modifierEtudiantForm!: FormGroup;
  etudiant!: any
  id!: string

  constructor(private route: ActivatedRoute, private etudiantservice: EtudiantsService, private formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      const id = data.get('idEtudiant');
      if (id !== null) {
        this.id = id;
        console.log(this.id)
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

      dateDeNaissance: new FormControl(this.etudiant.dateDeNaissance, [Validators.required]) ,
      emailEtudiant: new FormControl(this.etudiant.emailEtudiant, [Validators.required, Validators.email]),
      emailContactUrgence: new FormControl(this.etudiant.emailContactUrgence),
      filiere: new FormControl(this.etudiant.filiere, Validators.required), // Aucun validateur requis ici
      groupeSanguin: new FormControl(this.etudiant.groupeSanguin), // Aucun validateur requis ici
      matricule: new FormControl(this.etudiant.matricule, Validators.required), // Aucun validateur requis ici
      niveau: new FormControl(this.etudiant.niveau, Validators.required), // Aucun validateur requis ici
      nom:new FormControl(this.etudiant.nom),
      nomContactUrgence: new FormControl(this.etudiant.nomContactUrgence, Validators.required), // Aucun validateur requis ici
      numeroDeTelephone: new FormControl(this.etudiant.numeroDeTelephone, [Validators.required]), // Champs numérique avec validation de motif
      numeroDeTelephoneUrgence: new FormControl(this.etudiant.numeroDeTelephoneUrgence, Validators.required), // Aucun validateur requis ici
      numeroWhatsapp: new FormControl(this.etudiant.numeroWhatsapp), // Aucun validateur requis ici
      poids: new FormControl(this.etudiant.poids), // Aucun validateur requis ici
      prenom: new FormControl(this.etudiant.prenom),
      relationContactUrgence: new FormControl(this.etudiant.relationContactUrgence, Validators.required), // Aucun validateur requis ici
      sexe: new FormControl(this.etudiant.sexe, Validators.required), // Aucun validateur requis ici
      taille: new FormControl(this.etudiant.taille), // Aucun validateur requis ici
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
        alert("Modification réussi !");
        console.log(data)
        //redirection ici
      },
      error => {
        alert("Erreur lors de l'enregistrement.");
      }
    );
  }

}
