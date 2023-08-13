import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-modifier-medicament',
  templateUrl: './modifier-medicament.component.html',
  styleUrls: ['./modifier-medicament.component.scss']
})
export class ModifierMedicamentComponent implements OnInit {
  modifierMedicamentForm!: FormGroup
  medicament: any;
  minDate!: Date;
  id!: string;
  constructor(private medicamentService: StocksService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { }
  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      const id = data.get('idMedicament');
      if (id !== null) {
        this.id = id;
        console.log(this.id)
      }
      console.log(data.get('idMedicament'));

      this.medicamentService.infoMedicament(parseInt(this.id)).subscribe(
        data => {
          console.log(data);
          alert(JSON.stringify(data));
          this.medicament = data;
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
  initialiseForm() {
    this.minDate = new Date();
    this.modifierMedicamentForm = this.formBuilder.group({
      nomMedicament: new FormControl(this.medicament.nomMedicament),
      nomGeneriqueMedicament: new FormControl(this.medicament.nomGeneriqueMedicament),
      dateExpiration: new FormControl(this.medicament.dateExpiration),
      prixUnitaire: new FormControl(this.medicament.prixUnitaire),
      dosage: new FormControl(this.medicament.dosage),
      supprimer: new FormControl(this.medicament.supprimer),
      formePharmaceutique: new FormControl(this.medicament.formePharmaceutique),
      quantiteDisponible: new FormControl(this.medicament.quantiteDisponible)
    })
  }
  // medicament = {
  //   "idMedicament":1,
  //   "nom":"Efferalgant",
  //   "nomGenerique":"Paracetamol",
  //   "dosage":500,
  //   "stockDisponible":20,
  //   "prixUnitaire":1000,
  //   "dateExpiration":"28/05/2028",
  //   "formePharmaceutique":"Comprime"
  // }
  modifierMedicament() {
    const modifierMedicament = this.modifierMedicamentForm.value;
    console.log(modifierMedicament)
    this.medicamentService.modifierMedicament(modifierMedicament, parseInt(this.id)).subscribe(
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
