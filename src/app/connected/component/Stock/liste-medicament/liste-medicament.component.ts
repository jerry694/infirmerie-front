import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-liste-medicament',
  templateUrl: './liste-medicament.component.html',
  styleUrls: ['./liste-medicament.component.scss']
})
export class ListeMedicamentComponent implements OnInit {
  search: string = ''
  save: any = []
  medicaments: any = []
  actualPage!:string

  constructor(private route: Router, private medicamentService: StocksService,private router:Router,private cdr: ChangeDetectorRef,private messageService:MessageService) {
    this.actualPage =this.router.routerState.snapshot.url
   }
  ngOnInit() {
this.refreshData()
    
  }
  refreshData(){
    this.medicamentService.listeMedicament().subscribe(
      data => {
        console.log(data)
        this.save=data
        this.medicaments = data
        //redirection ici
      },
      error => {
        alert("Erreur de lecture.");
      }
    );
  }
  rupture(table: Table) {
    this.search = '(<5) Medicament en rupture'
    // table.clear();
    console.log(table)
    this.medicaments = table._value.filter((data) => data.quantiteDisponible < 5)
  }
  clear(table: Table) {
    this.search = ''
    this.medicaments=this.save
    table.clear();

  }
  creer() {
    this.route.navigate(["medicament/creer"]);
  }
  more(idMedicament: number) {
    this.route.navigate(['medicament/apercu', idMedicament]);
  }
  modify(idMedicament: number) {
    this.route.navigate(['medicament/modifier', idMedicament]);
  }
  renouveler(idMedicament: number) {
    this.route.navigate(['medicament/renouveler', idMedicament]);
  }
  delete(idMedicament: number,nom?:string,dosage?:string) {
    console.log(idMedicament);
    this.medicamentService.supprimerMedicament(idMedicament).subscribe(
      data => {
        console.log(data)
          this.show("Le medicament "+ nom +" "+ dosage +" mg a ete supprime avec succes","Suppression","success")
        this.refreshData()
        //redirection ici
      },
      error => {
        // alert("Erreur de suppression.");
        console.log(error)
            this.show("Erreur lors de la suppression, veuillez reesayez!","Suppression","error")
      }
    );
  }
    show(message:string,tete:string,type:string) {
        this.messageService.add({ severity: type, summary: tete, detail: message });
    }

}
