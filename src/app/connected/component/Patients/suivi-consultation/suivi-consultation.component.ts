import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Etudiant } from 'src/app/etudiant';
import { ConsultationsService } from 'src/app/services/consultations.service';
import { EtudiantsService } from 'src/app/services/etudiants.service';
import { StocksService } from 'src/app/services/stocks.service';

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
  medicamentss: any = []
  id!: string;
  idEtudiant!: string;
  ficheSuivi!: FormGroup;
  minDate: Date = new Date()
  maxDate: Date = new Date()
  // fConsultation: any = {}

  time = { hour: 13, minute: 30 };
  spinners = true;


  constructor(private router: Router, private route: ActivatedRoute, private etudiantservice: EtudiantsService, private consultationService: ConsultationsService, private formBuilder: FormBuilder, private stockService: StocksService, private messageService: MessageService) { }
  ngOnInit() {
    this.getId()
    this.getIdEtudiant()
    this.initCivilite(parseInt(this.idEtudiant))
    this.initSymptomes()
    this.initMedicaments()
    this.initDiagnostique()
    this.initExamens()
    this.initForm()
    this.minDate.setHours(this.minDate.getHours()-3)
    this.maxDate.setHours(23)


    console.log(this.ficheSuivi.value)

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
        console.log(this.id)
      } else {
        // Gérer le cas où id est null (si nécessaire)
        console.log('ID idficheSuivi non fourni dans les paramètres de l\'URL.');
      }
      console.log(data.get('idFicheConsultation'));

    });
  }
  getIdEtudiant() {
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
  initMedicaments() {
    this.stockService.listeMedicament().subscribe(
      data => {
        console.log(data);
        this.medicamentss = data
        //redirection ici
      },
      error => {
        alert("Erreur de lecture medicaments.");
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
    this.ficheSuivi = this.formBuilder.group({
      symptomeList: new FormControl<any | null>([]),
      examenList: new FormControl<any | null>([]),
      medicamentListSuivie: this.formBuilder.array([new FormControl([]), new FormControl([])]),
      diagnostiqueList: new FormControl<any | null>([]),
      nouveauxSymptomes: ['', Validators.required], // Aucun validateur requis ici
      nouveauxDiagnostique: ['', Validators.required], // Aucun validateur requis ici
      nouveauxExamens: ['', Validators.required], // Aucun validateur requis ici
      heureArriveeSuivie: [new Date(), Validators.required],
      heureSortieSuivie: [null, Validators.required],
      dateProchainRendezVous: [null],
      heureProchainRendezVous: [null],
      temperature: [null],
      poids: [null, Validators.required], // Aucun validateur requis ici
      tension: [null], // Aucun validateur requis ici
      soinsDispense: [null]
    });
  }
  public get medicamentListSuivie(): FormArray {
    return this.ficheSuivi.get('medicamentListSuivie') as FormArray
  }
  public get medicamentQuantiteListSuivi(): FormArray {
    return this.ficheSuivi.get('medicamentQuantiteListSuivi') as FormArray
  }
  public addmedicamentListSuivie(): void {
    this.medicamentListSuivie.push(new FormControl());
    this.medicamentListSuivie.push(new FormControl());
    // this.medicamentQuantiteListSuivi.push(new FormControl());
  }
  public deletemedicamentListSuivie(index: number): void {
    this.medicamentListSuivie.removeAt(index + 1)
    this.medicamentListSuivie.removeAt(index)
    this.medicamentListSuivie.markAsDirty()
  }
  suivre() {
    const idSymptome = this.ficheSuivi.value.symptomeList
    this.ficheSuivi.value.symptomeList = []
    const idExamen = this.ficheSuivi.value.examenList
    this.ficheSuivi.value.examenList = []
    const idDiagnostique = this.ficheSuivi.value.diagnostiqueList
    this.ficheSuivi.value.diagnostiqueList = []

    const nouveauxSymptomes = this.ficheSuivi.value.nouveauxSymptomes
    this.ficheSuivi.value.nouveauxSymptomes = ''
    const nouveauxDiagnostique = this.ficheSuivi.value.nouveauxDiagnostique
    this.ficheSuivi.value.nouveauxDiagnostique = ''
    const nouveauxExamens = this.ficheSuivi.value.nouveauxExamens
    this.ficheSuivi.value.nouveauxExamens = ''

    this.ficheSuivi.value.heureProchainRendezVous = this.ficheSuivi.value.dateProchainRendezVous

    const medicamentListSuivie = this.medicamentListSuivie.value.filter((_: any, index: number) => index % 2 === 0)
    if (this.medicamentListSuivie.value != null) {
      const medicamentListSuivie = this.medicamentListSuivie.value.filter((_: any, index: number) => index % 2 === 0).map((item: string) => parseFloat(item));
    }

    const medicamentQuantiteListSuivi = this.medicamentListSuivie.value.filter((_: any, index: number) => index % 2 === 1);

    this.ficheSuivi.value.medicamentListSuivie = []
    console.log(this.ficheSuivi.value)
    console.log(medicamentListSuivie)
    console.log(medicamentQuantiteListSuivi)

    this.consultationService.suivre(this.ficheSuivi.value, parseInt(this.id), idSymptome, nouveauxSymptomes, idExamen, nouveauxExamens, idDiagnostique, nouveauxDiagnostique, medicamentListSuivie, medicamentQuantiteListSuivi).subscribe(
      data => {
        // alert("Enregistrement réussi !");
        // this.router.navigate(["patient"]);
        console.log(data)
        this.show("Le suivit de l'etudiant " + this.etudiant.nom.toUpperCase() + " " + this.etudiant.prenom + " a ete enregistre avec succes", "Enregistrement", "success")
        //redirection ici
        this.router.navigate(["connect/patient"]);

      },
      error => {
        console.log(error)
        alert("Erreur lors de l'enregistrement.");
        this.show("Erreur lors de l'enregistrement du suivi veuillez reesayez!", "Enregistrement", "error")
      }
    );
  }
  show(message: string, tete: string, type: string) {
    this.messageService.add({ severity: type, summary: tete, detail: message });
  }

}
