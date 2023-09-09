import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
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

  constructor(private route: Router, private etudiantservice: EtudiantsService,private messageService:MessageService) { 

  }

  ngOnInit() {
this.refreshData()
  }

  refreshData(){
    this.etudiantservice.listeEtudiants().subscribe(
      data => {
        // this.show("init","Initialisation","success")
        console.log(data)
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
        // ;
        this.etudiantservice.listeEtudiants().subscribe(
          data => {
            console.log(data)
            this.etudiants = data
            this.show("Etudiant supprime avec succes","Suppression","success")
            //redirection ici
          },
          error => {
            // alert("Erreur de lecture.");
            this.show("Erreur lors de la suppression","Suppression","error")

          }
        );
        //redirection ici
      },
      error => {
        alert("Erreur de suppression.");
      }
    );
    console.log(idEtudiant);
  }

  show(message:string,tete:string,type:string) {
        this.messageService.add({ severity: type, summary: tete, detail: message });
    }

}
