import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Etudiant } from 'src/app/etudiant';
import { ConsultationsService } from 'src/app/services/consultations.service';
import { EtudiantsService } from 'src/app/services/etudiants.service';
import { StocksService } from 'src/app/services/stocks.service';
import { Symptomes } from 'src/entites/symptomes';
import { Location } from '@angular/common';

@Component({
  selector: 'app-consulter-patient',
  templateUrl: './consulter-patient.component.html',
  styleUrls: ['./consulter-patient.component.scss']
})
export class ConsulterPatientComponent implements OnInit {

  etudiant: any = new Etudiant();
  isDropdownOpen = false;
  // dateArrivee: Date = new Date()
  // dateSortie!: Date
  civilite: any
  symptomes: any = []
  diagnostiques: any = []
  medicamentss: any = []
  examens: any = []
  id!: string
  ficheConsultation!: FormGroup;
  fConsultation: any = {}
  minDate: Date = new Date()
  time = { hour: 13, minute: 30 };
  spinners = true;
  lDisabled: boolean[] = [false, false, false]




  // formBuilder: any;



  constructor(private router: Router, private route: ActivatedRoute, private etudiantservice: EtudiantsService, private consultationService: ConsultationsService, private formBuilder: FormBuilder, private stockService: StocksService, private messageService: MessageService,private locations:Location) { }
  ngOnInit() {
    this.getId()
    this.initCivilite(parseInt(this.id))
    this.initSymptomes()
    this.initMedicaments()
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
      const id = data.get('idEtudiant');
      if (id !== null) {
        this.id = id;
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
  initForm() {
    this.ficheConsultation = this.formBuilder.group({
      symptomeList: new FormControl<any | null>([]),
      examenList: new FormControl<any | null>([]),
      diagnostiqueList: new FormControl<any | null>([]),
      medicamentListConsultation: this.formBuilder.array([new FormControl([]), new FormControl([])]),
      // medicamentQuantiteListConsultation:this.formBuilder.array([new FormControl()]),
      nouveauxSymptomes: ['', Validators.required], // Aucun validateur requis ici
      nouveauxDiagnostique: ['', Validators.required], // Aucun validateur requis ici
      nouveauxExamens: ['', Validators.required], // Aucun validateur requis ici
      heureArriveeConsultation: [new Date(), Validators.required],
      heureSortieConsultation: [null, Validators.required],
      dateProchainRendezVous: [null],
      heureProchainRendezVous: [null],
      temperature: [null],
      poids: [null, Validators.required], // Aucun validateur requis ici
      tension: [null], // Aucun validateur requis ici
      soinsDispense: [null]
    });
    this.lDisabled = [this.ficheConsultation.controls['symptomeList'].touched, this.ficheConsultation.controls['examenList'].touched, this.ficheConsultation.controls['diagnostiqueList'].touched]
    console.log(this.lDisabled)
  }
  public get medicamentListConsultation(): FormArray {
    return this.ficheConsultation.get('medicamentListConsultation') as FormArray
  }
  public get medicamentQuantiteListConsultation(): FormArray {
    return this.ficheConsultation.get('medicamentQuantiteListConsultation') as FormArray
  }
  public addmedicamentListConsultation(): void {
    this.medicamentListConsultation.push(new FormControl());
    this.medicamentListConsultation.push(new FormControl());
    // this.medicamentQuantiteListConsultation.push(new FormControl());
  }
  public deletemedicamentListConsultation(index: number): void {
    this.medicamentListConsultation.removeAt(index + 1)
    this.medicamentListConsultation.removeAt(index)
    this.medicamentListConsultation.markAsDirty()
  }


  consulter() {
    const idSymptome = this.ficheConsultation.value.symptomeList
    this.ficheConsultation.value.symptomeList = []
    const idExamen = this.ficheConsultation.value.examenList
    this.ficheConsultation.value.examenList = []
    const idDiagnostique = this.ficheConsultation.value.diagnostiqueList
    this.ficheConsultation.value.diagnostiqueList = []

    const nouveauxSymptomes = this.ficheConsultation.value.nouveauxSymptomes
    this.ficheConsultation.value.nouveauxSymptomes = ''
    const nouveauxDiagnostique = this.ficheConsultation.value.nouveauxDiagnostique
    this.ficheConsultation.value.nouveauxDiagnostique = ''
    const nouveauxExamens = this.ficheConsultation.value.nouveauxExamens
    this.ficheConsultation.value.nouveauxExamens = ''

    this.ficheConsultation.value.heureProchainRendezVous = this.ficheConsultation.value.dateProchainRendezVous

    const medicamentListConsultation = this.medicamentListConsultation.value.filter((_: any, index: number) => index % 2 === 0)
    if (this.medicamentListConsultation.value != null) {
      const medicamentListConsultation = this.medicamentListConsultation.value.filter((_: any, index: number) => index % 2 === 0).map((item: string) => parseFloat(item));
    }
    // Filtrer les médicaments en prenant les indices pairs

    // Filtrer les quantités en prenant les indices impairs
    const medicamentQuantiteListConsultation = this.medicamentListConsultation.value.filter((_: any, index: number) => index % 2 === 1);

    this.ficheConsultation.value.medicamentListConsultation = []
    console.log(this.ficheConsultation.value)
    // this.medicamentListConsultation.value  .map(value => value === '' ? null : value);
    console.log(medicamentListConsultation)
    console.log(medicamentQuantiteListConsultation)
    // this.ficheConsultation.value.heureArriveeConsultation=this.formatH(this.ficheConsultation.value.heureArriveeConsultation)
    // this.ficheConsultation.value.heureSortieConsultation=this.formatH(this.ficheConsultation.value.heureSortieConsultation)
    // heureArriveeConsultation,heureSortieConsultation
    this.consultationService.consulter(this.ficheConsultation.value, parseInt(this.id), idSymptome, nouveauxSymptomes, idExamen, nouveauxDiagnostique, idDiagnostique, nouveauxExamens, medicamentListConsultation, medicamentQuantiteListConsultation).subscribe(
      data => {
        // alert("Enregistrement réussi !");
        this.show("La consultation de l'etudiant " + this.etudiant.nom.toUpperCase() + " " + this.etudiant.prenom + " a ete enregistre avec succes", "Consultation", "success")
        console.log(data)
        this.router.navigate(["connect/patient"]);

        //redirection ici
      },
      error => {
        console.log(error)
        this.show("Erreur lors de l'envoie de la coonsultation veuillez reesayez!", "Consultation", "error")
      }
    );
  }
  show(message: string, tete: string, type: string) {
    this.messageService.add({ severity: type, summary: tete, detail: message });
  }
  // preview(){
  //   this.locations.back()
  // }
aff(){
  console.log("34")
}
}
