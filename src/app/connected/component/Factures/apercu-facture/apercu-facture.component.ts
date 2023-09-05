import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FacturesService } from 'src/app/services/factures.service';

@Component({
  selector: 'app-apercu-facture',
  templateUrl: './apercu-facture.component.html',
  styleUrls: ['./apercu-facture.component.scss']
})
export class ApercuFactureComponent implements OnInit {
  id!: string;
  constructor(private route:Router,private router: ActivatedRoute,private factureService:FacturesService,private messageService:MessageService){}
  facture:any = {}
  ngOnInit() {
    this.router.paramMap.subscribe(data => {
      const id = data.get('idFacture');
      if (id !== null) {
        this.id = id;
        console.log(this.id)
      } else {
        // Gérer le cas où id est null (si nécessaire)
        console.log('ID étudiant non fourni dans les paramètres de l\'URL.');
      }
      console.log(data.get('idFacture'));
      this.refreshData()
      
    });
    // console.log(this.route)
  }
  refreshData(){
    this.factureService.infoFacture(parseInt(this.id)).subscribe(
      factureData => {
        console.log(factureData);
        this.facture = factureData;
        //redirection ici
      },
      error => {
        alert("Erreur de lecture.");
      }
    );
  }
  imprimer(){
    // this.route.navigate(["patient/creer"]);
    this.factureService.imprimerFacture(parseInt(this.id)).subscribe(
      data=>{
        alert("La facture a ete telecharge avec succes")
        console.log(data)
      },
      error=>{
        console.log(error)
      }
    )
    console.log("eo")
  }
  regler(){
    this.factureService.reglerFacture(parseInt(this.id)).subscribe(
      newFacture => {
        console.log(newFacture)
          this.show("La facture de l'etudiant "+ this.facture[0][1].toUpperCase() +" "+this.facture[0][2] +" a ete regle avec succes","Enregistrement","success")
        // window.location.reload();
        this.refreshData()
        //redirection ici
      },
      error => {
        console.log(error)
        alert("Erreur de reglement.");
            this.show("Erreur lors du reglement de la facture, veuillez reesayez!","Enregistrement","error")
      }
    );
    // this.route.navigate(['medicament/modifier',idMedicament]);
    console.log(this.id)
  }
  // more(idEtudiant:number){
  //   this.route.navigate(['patient/apercu',idEtudiant]);
  // }
  // modify(idEtudiant:number){
  //   this.route.navigate(['patient/modifier',idEtudiant]);
  // }
  // delete(idEtudiant:number){
  //   console.log(idEtudiant);
  // }
    show(message:string,tete:string,type:string) {
        this.messageService.add({ severity: type, summary: tete, detail: message });
    }

}
