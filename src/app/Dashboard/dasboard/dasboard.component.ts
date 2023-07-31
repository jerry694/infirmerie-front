import { Component } from '@angular/core';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})

export class DasboardComponent {
  
  private valeur = [12,13,14];
  informations = [
    {
      "image": "../../../assets/img/eTraites.svg",
      "label": "Etudiants traites",
      "valeur": this.valeur[0]
    },
    {
      "image": "../../../assets/img/rendezvous.svg",
      "label": "Rendez-vous",
      "valeur": this.valeur[1]
    },
    {
      "image": "../../../assets/img/facturenreglee.svg",
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
