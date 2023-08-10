import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})

export class DasboardComponent implements OnInit {
  data: any;
  options: any;

  ngOnInit(){
    
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
        labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil','Aou','Sep','Oct','Nov','Dec'],
        datasets: [
            {
                label: 'First Dataset',
                data: [25, 23, 2, 21, 12, 12, 32, 34, 7, 35, 35, 40, 40],
                fill: false,
                borderColor: documentStyle.getPropertyValue('#007759'),
                tension: 0.4
            },
            {
                label: 'Second Dataset',
                data: [2, 13, 23, 22, 10, 12, 35, 25, 7, 4, 16, 17, 23],
                fill: false,
                borderColor: documentStyle.getPropertyValue('#107EE2'),
                tension: 0.4
            }
        ]
    };

    this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };

  }
  
  private valeur = [12,13,14];
  informations = [
    {
      "image": "./assets/img/eTraites.svg",
      "label": "Etudiants traites",
      "valeur": this.valeur[0]
    },
    {
      "image": "./assets/img/rendezvous.svg",
      "label": "Rendez-vous",
      "valeur": this.valeur[1]
    },
    {
      "image": "./assets/img/facturenreglee.svg",
      "label": "Medicament en rupture",
      "valeur": this.valeur[2]
    },
  ]
  nonPayes = [
    {
      "nom":"Djoum Wilfried",
      "classe":"4 ISI",
      "date":"22/12/2023",
      "montant":"5300"
    },{
      "nom":"Ngueutchoua Alan",
      "classe":"4 ISI",
      "date":"20/12/2023",
      "montant":"2300"
    },
  ]
  rVous = null
  
  // this.valeur[0] = 3


}


