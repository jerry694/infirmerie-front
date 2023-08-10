import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-apercu-medicament',
  templateUrl: './apercu-medicament.component.html',
  styleUrls: ['./apercu-medicament.component.scss']
})
export class ApercuMedicamentComponent implements OnInit {

  medicament :any={}
  id!: string;

  constructor(private stockSevice:StocksService,private route: ActivatedRoute){  }
  ngOnInit(){
    this.route.paramMap.subscribe(data => {
      const id = data.get('idMedicament');
      if (id !== null) {
        this.id = id;
        console.log(this.id)
      } else {
        // Gérer le cas où id est null (si nécessaire)
        console.log('ID étudiant non fourni dans les paramètres de l\'URL.');
      }
      console.log(data.get('idMedicament'));
      
      this.stockSevice.infoMedicament(parseInt(this.id)).subscribe(
        medicamentData => {
          console.log(medicamentData);
          alert(JSON.stringify(medicamentData));
          this.medicament = medicamentData;
          //redirection ici
        },
        error => {
          alert("Erreur de lecture.");
        }
      );
    });
  }

}
