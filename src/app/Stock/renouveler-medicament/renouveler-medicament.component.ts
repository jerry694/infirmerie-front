import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-renouveler-medicament',
  templateUrl: './renouveler-medicament.component.html',
  styleUrls: ['./renouveler-medicament.component.scss']
})
export class RenouvelerMedicamentComponent implements OnInit {
  modifierMedicamentForm!:FormGroup
  medicament:any;
  renouveler:any;
  minDate!: Date;
  id!:string;
constructor(private medicamentService:StocksService,private route: ActivatedRoute,private formBuilder: FormBuilder,private router:Router){}

ngOnInit() {
  this.route.paramMap.subscribe(data => {
    const id = data.get('idMedicament');
    if (id !== null) {
      this.id = id;
      console.log(this.id)
    }
    console.log(data.get('idMedicament'));
    
    this.medicamentService.infoMedicament(parseInt(this.id)).subscribe(
      medicamentData => {
        console.log(medicamentData);
        alert(JSON.stringify(medicamentData));
        this.medicament = medicamentData;
        this.renouveler=medicamentData
        alert(JSON.stringify(this.medicament));
        this.initialiseForm()
        //redirection ici
      },
      error => {
        alert("Erreur de lecture.");
      }
    );
  });
}
initialiseForm(){
  this.minDate = new Date();
    this.modifierMedicamentForm=this.formBuilder.group({
      nomMedicament: new FormControl( {value: this.medicament.nomMedicament, disabled: true}),
      nomGeneriqueMedicament: new FormControl({value:this.medicament.nomGeneriqueMedicament, disabled: true}),
      dateExpiration: new FormControl(this.medicament.dateExpiration),
      prixUnitaire: new FormControl({value:this.medicament.nomGeneriqueMedicament, disabled: true}),
      dosage: new FormControl(this.medicament.dosage),
      formePharmaceutique: new FormControl({value:this.medicament.formePharmaceutique, disabled: true}),
      quantiteDisponible: new FormControl(this.medicament.quantiteDisponible)
    })
  }
  modifierMedicament(){
    const modifierMedicament = this.modifierMedicamentForm.value;
    this.renouveler.dateExpiration = modifierMedicament.dateExpiration
    this.renouveler.quantiteDisponible = modifierMedicament.quantiteDisponible
    this.renouveler.dosage = modifierMedicament.dosage
    console.log(this.renouveler)
    this.medicamentService.modifierMedicament(this.renouveler,parseInt(this.id)).subscribe(
      data => {
        alert("Modification réussi !");
        console.log(data)
        //redirection ici
        this.router.navigate(["medicament"]);
      },
      error => {
        alert("Erreur lors de l'enregistrement.");
      }
    );
  }
}
