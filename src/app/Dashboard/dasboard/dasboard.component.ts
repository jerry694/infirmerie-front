import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})

export class DasboardComponent implements OnInit {
  data: any;
  options: any;
  previousHere: any = ['2022', [25, 23, 2, 21, 12, 12, 32, 34, 7, 35, 35, 40, 40]]
  thisHere: any = ['2023', [2, 13, 23, 22, 10, 12, 35, 25, 7, 4, 16, 17, 23]]

  ngOnInit() {

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = "#707070";
    const textColorSecondary = "#707070";
    const surfaceBorder = "#EBEBEB";

    this.data = {
      labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Rapport '+ this.previousHere[0],
          data: this.previousHere[1],
          fill: false,
          borderColor: '#007759',
          tension: 0.5,
        },
        {
          label: 'Rapport '+ this.thisHere[0],
          data: this.thisHere[1],
          fill: false,
          borderColor: '#107EC2',
          tension: 0.5,
        }
      ]
    };

    this.options = {
      maintainAspectRatio: true,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
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
              size: 10,
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

  private valeur = [12, 13, 14];
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
      "nom": "Djoum Wilfried",
      "classe": "4 ISI",
      "date": "22/12/2023",
      "montant": "5300"
    }, {
      "nom": "Ngueutchoua Alan",
      "classe": "4 ISI",
      "date": "20/12/2023",
      "montant": "2300"
    },
  ]
  rVous = null

  // this.valeur[0] = 3


}


