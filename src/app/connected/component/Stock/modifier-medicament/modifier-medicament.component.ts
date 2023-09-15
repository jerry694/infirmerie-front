import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
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
  constructor(private medicamentService: StocksService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private messageService:MessageService) { }
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
          this.medicament = data;
          
          // Déplacez l'appel à initialiseForm() ici
          this.initialiseForm();
          
          //redirection ici
        },
        error => {
          console.log(error);
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
      dateExpiration: new FormControl(new Date (this.medicament.dateExpiration)),
      prixUnitaire: new FormControl(this.medicament.prixUnitaire),
      dosage: new FormControl(this.medicament.dosage),
      // supprimer: new FormControl(this.medicament.supprimer),
      formePharmaceutique: new FormControl(this.medicament.formePharmaceutique),
      quantiteDisponible: new FormControl({value:this.medicament.quantiteDisponible,disabled:true})
    })
  }

  modifierMedicament() {
    const modifierMedicament = this.modifierMedicamentForm.value;
    console.log(modifierMedicament)
    this.medicamentService.modifierMedicament(modifierMedicament, parseInt(this.id)).subscribe(
      data => {
        alert("Modification réussi !");
        console.log(data)
          this.show("Le medicament "+ this.medicament.nomMedicament +" "+this.medicament.dosage +" a ete modifie avec succes","Modification","success")
        //redirection ici
        this.router.navigate(["connect/medicament"]);
      },
      error => {
        // alert("Erreur lors de l.");
            this.show("Erreur lors de l'enregistrement de la modification, veuillez reesayez!","Enregistrement","error")
      }
    );
  }
    show(message:string,tete:string,type:string) {
        this.messageService.add({ severity: type, summary: tete, detail: message });
    }

}
