import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EtudiantsService } from 'src/app/services/etudiants.service';

@Component({
  selector: 'app-apercu-patient',
  templateUrl: './apercu-patient.component.html',
  styleUrls: ['./apercu-patient.component.scss'],
})
export class ApercuPatientComponent implements OnInit {
  etudiant: any= {}
  id!: string;

  constructor(private route: ActivatedRoute, private etudiantservice: EtudiantsService) {}

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
          //redirection ici
        },
        error => {
          alert("Erreur de lecture.");
        }
      );
    });
    // console.log(this.route)
  }

 
  exploreConsultation(id:number) {
    console.log("consutation de " + id)
  }
  exploreFacture(id:number) {
    console.log("facture de " + id)
  }
  // modify(idEtudiant:number){
  //   this.route.navigate(['patient/modifier',idEtudiant]);
  // }
  modify(){}

}