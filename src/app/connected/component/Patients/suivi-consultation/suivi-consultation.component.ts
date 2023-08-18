import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Etudiant } from 'src/app/etudiant';
import { ConsultationsService } from 'src/app/services/consultations.service';
import { EtudiantsService } from 'src/app/services/etudiants.service';

@Component({
  selector: 'app-suivi-consultation',
  templateUrl: './suivi-consultation.component.html',
  styleUrls: ['./suivi-consultation.component.scss']
})
export class SuiviConsultationComponent implements OnInit {
  etudiant: any = new Etudiant();
  civilite: any
  symptomes: any = []
  diagnostiques: any = []
  examens: any = []
  id!: string;
  idEtudiant!:string;
  ficheConsultation!: FormGroup;
  fConsultation: any = {}

  time = { hour: 13, minute: 30 };
  spinners = true;


  constructor(private router: Router, private route: ActivatedRoute, private etudiantservice: EtudiantsService, private consultationService: ConsultationsService, private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.getId()
    this.getIdEtudiant()
    this.initCivilite(parseInt(this.idEtudiant))
    this.initSymptomes()
    this.initDiagnostique()
    this.initExamens()
    this.initForm()

 
    console.log(this.ficheConsultation.value)

    console.log(this.civilite)
  }
  formatH(date: Date): any {
    const currentDate = date; // Obtenez la date et l'heure actuelles

    const hours = currentDate.getHours(); // Obtenez les heures
    const minutes = currentDate.getMinutes(); // Obtenez les minutes
    const seconds = currentDate.getSeconds(); // Obtenez les secondes

    // Formatez les heures, minutes et secondes pour les afficher sous forme de HH:MM:SS
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  }
  getId() {
    this.route.paramMap.subscribe(data => {
      const id = data.get('idFicheConsultation');
      if (id !== null) {
        this.id = id;
        console.log('fc '+this.id)
      } else {
        // Gérer le cas où id est null (si nécessaire)
        console.log('ID idFicheConsultation non fourni dans les paramètres de l\'URL.');
      }
      console.log(data.get('idFicheConsultation'));

    });
  }
  getIdEtudiant(){
    this.route.paramMap.subscribe(data => {
      const id = data.get('idEtudiant');
      if (id !== null) {
        this.idEtudiant = id;
        console.log(this.id)
      } else {
        // Gérer le cas où id est null (si nécessaire)
        console.log('ID étudiant non fourni dans les paramètres de l\'URL.');
      }
      console.log(data.get('idEtudiant'));

    }); 
  }
  initCivilite(idEtudiant: number) {
    this.etudiantservice.infoEtudiant(idEtudiant).subscribe(
      data => {
        console.log(data);
        const temp: any = data
        this.etudiant.nom = temp.nom;
        this.etudiant.prenom = temp.prenom;
        this.etudiant.antecedantMedicaux = temp.antecedantMedicauxList
        //redirection ici
      },
      error => {
        alert("Erreur de lecture civilite.");
      }
    );
  }
  initSymptomes() {
    this.consultationService.listeSymptomes().subscribe(
      data => {
        console.log(data);
        this.symptomes = data
        //redirection ici
      },
      error => {
        alert("Erreur de lecture civilite.");
      }
    );
  }
  initDiagnostique() {
    this.consultationService.listeDiagnostique().subscribe(
      data => {
        console.log(data);;
        this.diagnostiques = data
        //redirection ici
      },
      error => {
        alert("Erreur de lecture diagnostique.");
      }
    );
  }
  initExamens() {
    this.consultationService.listeExamen().subscribe(
      data => {
        console.log(data);
        this.examens = data
        //redirection ici
      },
      error => {
        alert("Erreur de lecture diagnostique.");
      }
    );
  }
  initForm() {
    this.ficheConsultation = this.formBuilder.group({
      symptomeList: new FormControl<any | null>([]),
      examenList: new FormControl<any | null>([]),
      diagnostiqueList: new FormControl<any | null>([]),
      nouveauxSymptomes: ['', Validators.required], // Aucun validateur requis ici
      nouveauxDiagnostique: ['', Validators.required], // Aucun validateur requis ici
      nouveauxExamens: ['', Validators.required], // Aucun validateur requis ici
      heureArriveeSuivie: [new Date(), Validators.required],
      heureSortieSuivie: [null, Validators.required],
      dateProchainRendezVous:[null],
      heureProchainRendezVous:[null],
      temperature: [null],
      poids: [null, Validators.required], // Aucun validateur requis ici
      tension: [null], // Aucun validateur requis ici
      soinsDispense:[null]
    });
  }
  suivre() {
    const idSymptome = this.ficheConsultation.value.symptomeList
    this.ficheConsultation.value.symptomeList = []
    const idExamen = this.ficheConsultation.value.examenList
    this.ficheConsultation.value.examenList = []
    const idDiagnostique = this.ficheConsultation.value.diagnostiqueList
    this.ficheConsultation.value.diagnostiqueList = []
    
    const nouveauxSymptomes = this.ficheConsultation.value.nouveauxSymptomes
    this.ficheConsultation.value.nouveauxSymptomes=''
    const nouveauxDiagnostique = this.ficheConsultation.value.nouveauxDiagnostique
    this.ficheConsultation.value.nouveauxDiagnostique=''
    const nouveauxExamens = this.ficheConsultation.value.nouveauxExamens
    this.ficheConsultation.value.nouveauxExamens=''

    this.ficheConsultation.value.heureProchainRendezVous=this.ficheConsultation.value.dateProchainRendezVous

    this.consultationService.suivre(this.ficheConsultation.value, parseInt(this.id), idSymptome,nouveauxSymptomes, idExamen,nouveauxDiagnostique, idDiagnostique,nouveauxExamens).subscribe(
      data => {
        alert("Enregistrement réussi !");
        // this.router.navigate(["patient"]);
        console.log(data)
        //redirection ici
      },
      error => {
        console.log(error)
        alert("Erreur lors de l'enregistrement.");
      }
    );
  }
}
