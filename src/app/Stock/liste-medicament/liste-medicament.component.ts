import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-liste-medicament',
  templateUrl: './liste-medicament.component.html',
  styleUrls: ['./liste-medicament.component.scss']
})
export class ListeMedicamentComponent implements OnInit{
 search: string=''
  medicaments: any = []

  constructor(private route:Router,private medicament : StocksService){}
  ngOnInit() {
    this.medicament.listeMedicament().subscribe(
      data => {
        console.log(data)
        alert(data)
        this.medicaments = data
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
  creer(){
    this.route.navigate(["medicament/creer"]);
  }
  more(idMedicament:number){
    this.route.navigate(['medicament/apercu',idMedicament]);
  }
  modify(idMedicament:number){
    this.route.navigate(['medicament/modifier',idMedicament]);
  }
  delete(idMedicament:number){
    console.log(idMedicament);
  }
}
