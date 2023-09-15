import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantsService } from 'src/app/services/etudiants.service';

@Component({
  selector: 'app-apercu-patient',
  templateUrl: './apercu-patient.component.html',
  styleUrls: ['./apercu-patient.component.scss'],
})
export class ApercuPatientComponent implements OnInit {
  etudiant: any = {}
  idEtudiant!: string;

  constructor(private route: ActivatedRoute, private etudiantservice: EtudiantsService,private router : Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      const id = data.get('idEtudiant');
      if (id !== null) {
        this.idEtudiant = id;
        console.log(this.idEtudiant)
      } else {
        // Gérer le cas où id est null (si nécessaire)
        console.log('ID étudiant non fourni dans les paramètres de l\'URL.');
      }
      console.log(data.get('idEtudiant'));
      
      this.etudiantservice.infoEtudiant(parseInt(this.idEtudiant)).subscribe(
        etudiantData => {
          console.log(etudiantData);
          this.etudiant = etudiantData;
          //redirection ici
        },
        error => {
          console.log(error)
          alert("Erreur de lecture.");
        }
      );
    });
    // console.log(this.route)
  }

 
  exploreConsultation(idFicheconsultation:number) {
    console.log("consutation de " + idFicheconsultation)
    this.router.navigate(['connect/consultation/apercu',idFicheconsultation]);
    console.log("consutation de " + idFicheconsultation)
  }
  exploreFacture(idFacture:number) {
    console.log("facture de " + idFacture)
    this.router.navigate(['connect/facture/apercu/',idFacture])
  }
  consulter(){
    this.router.navigate(['connect/patient/consulter/',this.idEtudiant]);

  }
  // modify(idEtudiant:number){
  //   this.route.navigate(['patient/modifier',idEtudiant]);
  // }
  modify(){
    this.router.navigate(['connect/patient/modifier/',this.idEtudiant]);

  }

}
