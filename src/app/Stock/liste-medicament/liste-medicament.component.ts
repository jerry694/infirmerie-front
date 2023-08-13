import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private route: Router, private medicamentService: StocksService,private router:Router,private cdr: ChangeDetectorRef) {
    this.actualPage =this.router.routerState.snapshot.url
   }
  ngOnInit() {

    this.medicamentService.listeMedicament().subscribe(
      data => {
        console.log(data)
        alert(data)
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
  delete(idMedicament: number) {
    console.log(idMedicament);
    this.medicamentService.supprimerMedicament(idMedicament).subscribe(
      data => {
        console.log(data)
        this.cdr.detectChanges()
        //redirection ici
      },
      error => {
        alert("Erreur de suppression.");
      }
    );
  }
}
