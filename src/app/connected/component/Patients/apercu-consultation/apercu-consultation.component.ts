import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultationsService } from 'src/app/services/consultations.service';
import { EtudiantsService } from 'src/app/services/etudiants.service';

@Component({
  selector: 'app-apercu-consultation',
  templateUrl: './apercu-consultation.component.html',
  styleUrls: ['./apercu-consultation.component.scss']
})
export class ApercuConsultationComponent implements OnInit {
  etudiant: any= {}
  id!: string;


  constructor(private route: ActivatedRoute, private consultationService: ConsultationsService,private router:Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      const id = data.get('idFicheConsultation');
      if (id !== null) {
        this.id = id;
        console.log(this.id)
      } else {
        // Gérer le cas où id est null (si nécessaire)
        console.log('ID étudiant non fourni dans les paramètres de l\'URL.');
      }
      console.log(data.get('idFicheConsultation'));
      
      this.consultationService.apercuConsultation(parseInt(this.id)).subscribe(
        data => {
          console.log(data);
          alert(JSON.stringify(data));
          this.etudiant = data;
          //redirection ici
        },
        error => {
          alert("Erreur de lecture.");
        }
      );
    });
    // console.log(this.route)
  }

 
  exploreConsultation(idFicheconsultation:number) {
    console.log("consutation de " + idFicheconsultation)
  }
  exploreFacture(id:number) {
    console.log("facture de " + id)
  }
  // modify(idEtudiant:number){
  //   this.route.navigate(['patient/modifier',idEtudiant]);
  // }
  suivre(){
    console.log("suivi de " + this.id)}
  consulterFacture(NumFacture:number){
    this.router.navigate(['facture/apercu',NumFacture]);
  }
}
