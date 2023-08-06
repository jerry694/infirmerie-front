import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantsService } from 'src/app/services/etudiants.service';
import { AgePipe } from 'src/app/pipe/age.pipe';

@Component({
  selector: 'app-liste-patient',
  templateUrl: './liste-patient.component.html',
  styleUrls: ['./liste-patient.component.scss'],

})
export class ListePatientComponent implements OnInit {
  
  etudiants: any = []

  constructor(private route: Router, private etudiantservice: EtudiantsService) { }

  ngOnInit() {
    this.etudiantservice.listeEtudiants().subscribe(
      data => {
        console.log(data)
        alert(data)
        this.etudiants = data
        //redirection ici
      },
      error => {
        alert("Erreur de lecture.");
      }
    );
  }


  creer() {
    this.route.navigate(["patient/creer"]);
  }
  more(idEtudiant: number) {
    this.route.navigate(['patient/apercu', idEtudiant]);
  }
  modify(idEtudiant: number) {
    this.route.navigate(['patient/modifier', idEtudiant]);
  }
  delete(idEtudiant: number) {
    this.etudiantservice.supprimerEtudiant(idEtudiant).subscribe(
      data => {
        console.log(data)
        alert(data)
        window.location.reload();
        //redirection ici
      },
      error => {
        alert("Erreur de suppression.");
      }
    );
    console.log(idEtudiant);
  }


}
