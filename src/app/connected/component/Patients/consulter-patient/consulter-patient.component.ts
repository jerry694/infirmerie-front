import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/etudiant';
import { ConsultationsService } from 'src/app/services/consultations.service';
import { EtudiantsService } from 'src/app/services/etudiants.service';
import { Symptomes } from 'src/entites/symptomes';

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
  examens: any = []
  id!: string
  ficheConsultation!: FormGroup;
  fConsultation: any = {}

  time = { hour: 13, minute: 30 };
  spinners = true;




  // formBuilder: any;



  constructor(private router: Router, private route: ActivatedRoute, private etudiantservice: EtudiantsService, private consultationService: ConsultationsService, private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.getId()
    this.initCivilite(parseInt(this.id))
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
  public deletemedicamentListConsultation(index:number,ind:number):void{
    this.medicamentListConsultation.removeAt(index)
    this.medicamentListConsultation.removeAt(ind)
    this.medicamentListConsultation.markAsDirty()
  }




  public addmedicamentQuantiteListConsultation(): void {
    this.medicamentQuantiteListConsultation.push(new FormControl())
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
        alert("Enregistrement réussi !");
        console.log(data)
        // this.router.navigate(["patient"]);

        //redirection ici
      },
      error => {
        console.log(error)
        alert("Erreur lors de l'enregistrement.");
      }
    );
  }
}
