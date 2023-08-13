import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { EtudiantsService } from 'src/app/services/etudiants.service';

@Component({
  selector: 'app-liste-patient',
  templateUrl: './liste-patient.component.html',
  styleUrls: ['./liste-patient.component.scss'],


})
export class ListePatientComponent implements OnInit {
  
 search: string=''
  
  etudiants: any = []

  constructor(private route: Router, private etudiantservice: EtudiantsService) { 

  }

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


  clear(table: Table) {
    this.search=''
    table.clear();
}
// onInputSearch(event: Event): void {
//   const searchText = (event.target as HTMLInputElement).value;
//   // Rest of your logic here
// }



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
