import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DashboardService } from 'src/app/services/dashboard.service';
import { FacturesService } from 'src/app/services/factures.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})

export class DasboardComponent implements OnInit {
  data: any;
  options: any;
  date : number = new Date().getFullYear()
  previousHere: any = [this.date-1, ]
  private thisHere: any = [this.date,]
  informations:any = []
  facturesNonReglee:any
  public valeur:any = [];
  public val: any
constructor(private factureService:FacturesService,private dashboardService:DashboardService){}
  ngOnInit() {
    // Chart.defaults.font<''>
    // this.previousHere=[null]
    this.initGraph()  
    this.initFacture()
    this.initEtiquette()
    console.log(this.date)
  }


  initGraph() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = "#707070";
    const textColorSecondary = "#707070";
    const surfaceBorder = "#EBEBEB";
    
    this.dashboardService.getNbrConsultationParAnneeEtMois(this.date).subscribe(
      data => {
        this.val=data
        console.log(data)

        const monthValueArray = Array.from({ length: 12 }, () => 0); // Crée un tableau initialisé avec des zéros pour chaque mois

        this.val.forEach((item:any) => {
          const [, month, value] = item; // Ignore l'année
          const monthIndex = new Date(`${month} 1, 2023`).getMonth(); // Obtient l'index du mois (0-11)
          monthValueArray[monthIndex] = value; // Place la valeur dans le tableau au bon index
        });

        this.thisHere[1]=monthValueArray
        console.log(this.thisHere[1])
        this.initData(textColor,textColorSecondary,surfaceBorder)

      },
    );
    this.dashboardService.getNbrConsultationParAnneeEtMois(this.date-1).subscribe(
      data => {
        this.val=data
        console.log(data)

        const monthValueArray = Array.from({ length: 12 }, () => 0); // Crée un tableau initialisé avec des zéros pour chaque mois

        this.val.forEach((item:any) => {
          const [, month, value] = item; // Ignore l'année
          const monthIndex = new Date(`${month} 1, ${this.date-1}`).getMonth(); // Obtient l'index du mois (0-11)
          monthValueArray[monthIndex] = value; // Place la valeur dans le tableau au bon index
        });

        this.previousHere[1]=monthValueArray
        console.log(this.previousHere[1])
        this.initData(textColor,textColorSecondary,surfaceBorder)

      },
    );
    console.log(this.previousHere[1])

   
    console.log(this.thisHere[1])
  }
  initData(textColor:string,textColorSecondary:string,surfaceBorder:string){
    this.data = {
       labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'],
       datasets: [
         {
           label: 'Rapport ' + this.previousHere[0],
           data: this.previousHere[1],
           fill: false,
           borderColor: '#007759',
           tension: 0.5,
         },
         {
           label: 'Rapport ' + this.thisHere[0],
           data: this.thisHere[1],
           fill: false,
           borderColor: '#107EC2',
           tension: 0.5,
         }
       ]
     };
     console.log(this.thisHere[1])
 
     this.options = {
       maintainAspectRatio: true,
       aspectRatio: 0.6,
       plugins: {
         legend: {
           labels: {
             font:{
               family:'poppins',
               // style:'italic'
             },
             color: textColor,
             usePointStyle: true,
             padding: 20,
           },
           position: 'bottom',
         }
       },
       scales: {
         x: {
           ticks: {
             color: textColorSecondary
           },
           grid: {
             color: "#FFFFFF",
             drawBorder: false
           }
         },
         y: {
           title: {
             display: true,
             text: 'Nombre de cas',  // Titre pour l'axe X (les labels)
             color: textColorSecondary,
             font: {
               family:'poppins',
               size: 13,
             }
           },
           ticks: {
             color: textColorSecondary
           },
           grid: {
             color: surfaceBorder,
             drawBorder: true
           }
         }
       }
     };
     
 }
  initFacture(){
    this.factureService.listeFacturenonReglee().subscribe(
      data => {
        console.log(data)
        this.facturesNonReglee=data
        //redirection ici
      },
      error => {
        alert("Erreur de lecture.");
      }
    );
  }
  initEtiquette(){
    this.dashboardService.nbreConsultation(this.date).subscribe(
      data => {
        this.val=data
        this.valeur[0]=this.val[0][1]
        console.log(this.valeur)
      },
    );
    this.informations = [
      {
        "image": "./assets/img/eTraites.svg",
        "label": "Etudiants traites"
      },
      {
        "image": "./assets/img/rendezvous.svg",
        "label": "Rendez-vous"
      },
      {
        "image": "./assets/img/facturenreglee.svg",
        "label": "Medicament en rupture"
      },
    ]
  }
  initRendezVous(){}

  rVous = null

  // this.valeur[0] = 3


}


