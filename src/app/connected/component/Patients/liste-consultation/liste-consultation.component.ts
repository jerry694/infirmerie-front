import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { ConsultationsService } from 'src/app/services/consultations.service';
import { FacturesService } from 'src/app/services/factures.service';

@Component({
  selector: 'app-liste-consultation',
  templateUrl: './liste-consultation.component.html',
  styleUrls: ['./liste-consultation.component.scss']
})
export class ListeConsultationComponent   {
  ficheConsultations: any = []
  search: string = ''
  // factures: any = []
  constructor(private route: Router, private consultationService: ConsultationsService) { }
  ngOnInit() {
    this.initFichedeConsultation()
  }
  clear(table: Table) {
    this.search = ''
    table.clear();
    console.log(table._value)
  }
  more(idFicheConsultation: number) {
    console.log(idFicheConsultation)
    this.route.navigate(['consultation/apercu/', idFicheConsultation]);
  }
  initFichedeConsultation(){
    this.consultationService.listeConsultation().subscribe(
      data => {
        console.log(data)
        alert(data)
        this.ficheConsultations = data
        //redirection ici
      },
      error => {
        alert("Erreur de lecture.");
      }
    );
  }

}
