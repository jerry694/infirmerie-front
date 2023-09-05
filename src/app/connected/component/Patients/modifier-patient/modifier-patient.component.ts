import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Etudiant } from 'src/app/etudiant';
import { EtudiantsService } from 'src/app/services/etudiants.service';
import { Location } from '@angular/common';


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
  antecedentItems!: any

  constructor(private route: ActivatedRoute, private etudiantservice: EtudiantsService, private formBuilder: FormBuilder,private messageService:MessageService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('idEtudiant');
      if (id != null) {
        this.id = id;
        console.log(this.id);

        this.etudiantservice.infoEtudiant(parseInt(this.id)).subscribe(
          etudiantData => {
            this.loadAntecedant()
            console.log(etudiantData);
            this.etudiant = etudiantData;
            this.initialiseForm();
            //redirection ici
          },
          error => {
            console.log(error);
            alert("Erreur de des informations.");
          }
        );
      } else {
        alert("ID de l'étudiant non fourni dans les paramètres.");
      }
    });
    // console.log(this.route)
  }

  initialiseForm() {
    this.maxDate = new Date()
    console.log(this.maxDate.getFullYear())
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 14)

    console.log(this.etudiant)
    this.modifierEtudiantForm = this.formBuilder.group({

      // antecedantMedicauxList: [[null]], // Champs tableau avec valeur par défaut

      antecedantMedicauxList: new FormControl<any | null>(this.etudiant.antecedantMedicauxList.map((item: any) => item.idAntecedantMedicaux)),
      dateDeNaissance: new FormControl(new Date(this.etudiant.dateDeNaissance), [Validators.required]),
      emailEtudiant: new FormControl(this.etudiant.emailEtudiant, [Validators.required, Validators.email]),
      emailContactUrgence: new FormControl(this.etudiant.emailContactUrgence),
      filiere: new FormControl(this.etudiant.filiere, Validators.required), // Aucun validateur requis ici
      groupeSanguin: new FormControl(this.etudiant.groupeSanguin), // Aucun validateur requis ici
      matricule: new FormControl(this.etudiant.matricule, Validators.required), // Aucun validateur requis ici
      niveau: new FormControl(this.etudiant.niveau, Validators.required), // Aucun validateur requis ici
      nom: new FormControl(this.etudiant.nom),
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
  // model : any;

  modifierEtudiant() {
    const modifiedEtudiant = this.modifierEtudiantForm.value;
    console.log(modifiedEtudiant)
    // Vérifier si l'id_Infirmiere est valide


    this.etudiantservice.modifierEtudiant(modifiedEtudiant, parseInt(this.id)).subscribe(
      data => {
        alert("Modification réussi !");
        console.log(data)
        this.show("Etudiant "+ this.modifierEtudiantForm.value.nom.toUpperCase() +" "+this.modifierEtudiantForm.value.prenom +" modifie avec succes","Enregistrement","success")
        //redirection ici
      },
      error => {
        alert("Erreur lors de l'enregistrement.");
            this.show("Erreur lors de l'enregistrement veuillez reesayez!","Enregistrement","error")
      }
    );
  }
  loadAntecedant() {
    this.etudiantservice.listeAntecedantMedicaux().subscribe(
      data => {
        if (data != null) { }
        console.log(data)
        this.antecedentItems = data
        //redirection ici
      },
      error => {
        console.log(error)
        alert("Erreur de lecture.");
      }
    );
  }
  preview(){
    // this.locations.back()
  // this.router.navigate(['../../']);
  }
  show(message:string,tete:string,type:string) {
        this.messageService.add({ severity: type, summary: tete, detail: message });
    }

}
