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
  id!: string;

  constructor(private route: ActivatedRoute, private etudiantservice: EtudiantsService,private router : Router) {}

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
    this.router.navigate(['consultation/apercu',idFicheconsultation]);
    console.log("consutation de " + idFicheconsultation)
  }
  exploreFacture(id:number) {
    console.log("facture de " + id)
    this.router.navigate(['facture/apercu/',id])
  }
  // modify(idEtudiant:number){
  //   this.route.navigate(['patient/modifier',idEtudiant]);
  // }
  modify(){}

}
