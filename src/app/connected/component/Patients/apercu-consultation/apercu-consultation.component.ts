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
  etudiant: any = {}
  infoEtudiant:any =[]
  idFicheConsultation!: string;
  idEtudiant!:number


  constructor(private route: ActivatedRoute, private consultationService: ConsultationsService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      const id = data.get('idFicheConsultation');
      if (id !== null) {
        this.idFicheConsultation = id;
        console.log(this.idFicheConsultation)
      } else {
        // Gérer le cas où id est null (si nécessaire)
        console.log('ID étudiant non fourni dans les paramètres de l\'URL.');
      }
      console.log(data.get('idFicheConsultation'));

      this.consultationService.apercuConsultation(parseInt(this.idFicheConsultation)).subscribe(
        data => {
          console.log(data);
          const temp:any = data
          // this.etudiant = temp;
          this.etudiant = temp[0][0]
          this.infoEtudiant[0]=temp[0][1]
          this.infoEtudiant[1]=temp[0][2]
          this.infoEtudiant[2]=temp[0][3]
          this.infoEtudiant[3]=temp[0][4]
          this.idEtudiant=temp[0][0].etudiant
          //redirection ici
        },
        error => {
          alert("Erreur de lecture.");
        }
      );
    });
    // console.log(this.route)
  }


  exploreSuivi(idFicheSuivie: number) {
    console.log("suivi " + idFicheSuivie)
    this.router.navigate(["connect/consultation/suivre/apercu",idFicheSuivie])
  }
  exploreFacture(idFacture: number) {
    console.log("facture " + idFacture)
  }
  // modify(idEtudiant:number){
  //   this.route.navigate(['patient/modifier',idEtudiant]);
  // }
  suivre() {
    // console.log("suivi de " + this.id)
    this.router.navigate(['connect/consultation/suivre',this.idEtudiant,this.idFicheConsultation]);
  }
  consulterFacture(NumFacture: number) {
    this.router.navigate(['connect/facture/apercu', NumFacture]);
  }

}
