import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { merge } from 'chart.js/dist/helpers/helpers.core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { FacturesService } from 'src/app/services/factures.service';

@Component({
  selector: 'app-liste-facture',
  templateUrl: './liste-facture.component.html',
  styleUrls: ['./liste-facture.component.scss']
})
export class ListeFactureComponent {
  factures: any = []
  search: string=''
  save: any = []
  // factures: any = []
  clear(table: Table) {
    this.search=''
    this.factures=this.save
    table.clear();
}  
  constructor(private route:ActivatedRoute,private router:Router,private factureService:FacturesService,private messageService:MessageService){}
  ngOnInit() {
    
    this.refreshData(); // Appeler la méthode pour la première fois
    // setInterval(() => {
    //   this.refreshData(); // Rafraîchir les données à intervalles réguliers
    // }, 10);


  }
  refreshData(){
        // document.body.style.transform = 'scale(0.8)';
        this.factureService.listeFacture().subscribe(
          data => {
            console.log(data)
            this.save=data
            this.factures = data
            //redirection ici
          },
          error => {
            alert("Erreur de lecture.");
          }
        );
  }
  more(idFacture:number){
    this.router.navigate(['facture/apercu',idFacture]);
  }
  cash(idFacture:number,nom?:string,prenom?:string){
    this.factureService.reglerFacture(idFacture).subscribe(
      newFacture => {
        console.log(newFacture)
          this.show("La facture "+ idFacture +" de "+ nom?.toUpperCase() +" "+ prenom +" a ete reglee avec succes","Facture","success")
        // this.refresh()
        this.refreshData();
        console.log("this.refresh")
        // window.location.reload();
        //redirection ici
      },
      error => {
        console.log(error)
        alert("Erreur de reglement.");
            this.show("Erreur lors du reglement de la facture veuillez reesayez!","Facture","error")
      }
    );
    // this.route.navigate(['medicament/modifier',idMedicament]);
    console.log(idFacture)
  }
  nonReglee(table: Table) {
    this.search = '(non Reglee ) Factures non reglees'
    // table.clear();
    console.log(table)
    this.factures = table._value.filter((data) => data[0].statutFacture = false)
  }
  refresh(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.navigate(['./'],{
      relativeTo:this.route,
      queryParamsHandling:"merge"
    })
  }
    show(message:string,tete:string,type:string) {
        this.messageService.add({ severity: type, summary: tete, detail: message });
    }

}
