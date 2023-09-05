import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-renouveler-medicament',
  templateUrl: './renouveler-medicament.component.html',
  styleUrls: ['./renouveler-medicament.component.scss']
})
export class RenouvelerMedicamentComponent implements OnInit {
  modifierMedicamentForm!: FormGroup
  medicament: any;
  renouveler: any;
  minDate!: Date;
  id!: string;
  constructor(private medicamentService: StocksService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router,private messageService:MessageService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      const id = data.get('idMedicament');
      if (id !== null) {
        this.id = id;
        console.log(this.id);
        // Le reste de votre code ici...
        console.log(data.get('idMedicament'));

        this.medicamentService.infoMedicament(parseInt(this.id)).subscribe(
          medicamentData => {
            console.log(medicamentData);
            this.medicament = medicamentData;
            this.renouveler = medicamentData
            this.initialiseForm()
            //redirection ici
          },
          error => {
            alert("Erreur de lecture.");
          }
        );
      } else {
        // Gérer le cas où 'id' est null, par exemple, afficher un message d'erreur ou rediriger.
        console.error("L'ID du médicament est null.");
      }
    });
    // this.route.paramMap.subscribe(data => {
    //   const id = data.get('idMedicament');
    //   if (id !== null) {
    //     this.id = id;
    //     console.log(this.id)
    //   }
    //   console.log(data.get('idMedicament'));

    //   this.medicamentService.infoMedicament(parseInt(this.id)).subscribe(
    //     medicamentData => {
    //       console.log(medicamentData);
    //       this.medicament = medicamentData;
    //       this.renouveler = medicamentData
    //       this.initialiseForm()
    //       //redirection ici
    //     },
    //     error => {
    //       alert("Erreur de lecture.");
    //     }
    //   );
    // });
  }
  initialiseForm() {
    this.minDate = new Date();
    this.modifierMedicamentForm = this.formBuilder.group({
      nomMedicament: new FormControl({ value: this.medicament.nomMedicament, disabled: true }),
      nomGeneriqueMedicament: new FormControl({ value: this.medicament.nomGeneriqueMedicament, disabled: true }),
      dateExpiration: new FormControl(new Date(this.medicament.dateExpiration)),
      prixUnitaire: new FormControl({ value: this.medicament.nomGeneriqueMedicament, disabled: true }),
      dosage: new FormControl({ value: this.medicament.dosage, disabled: true }),
      formePharmaceutique: new FormControl({ value: this.medicament.formePharmaceutique, disabled: true }),
      quantiteDisponible: new FormControl(this.medicament.quantiteDisponible)
    })
  }
  modifierMedicament() {
    const modifierMedicament = this.modifierMedicamentForm.value;
    this.renouveler.dateExpiration = modifierMedicament.dateExpiration
    this.renouveler.quantiteDisponible = modifierMedicament.quantiteDisponible
    this.renouveler.dosage = modifierMedicament.dosage
    console.log(this.renouveler)
    this.medicamentService.modifierMedicament(this.renouveler, parseInt(this.id)).subscribe(
      data => {
        // alert("Modification réussi !");
        console.log(data)
          this.show("Etudiant "+ this.medicament.nomMedicament +" "+this.medicament.dosage +" enregistre avec succes","Renouvellement","success")
        //redirection ici
        this.router.navigate(["medicament"]);
      },
      error => {
        console.log(error)
        alert("Erreur lors de l'enregistrement.");
            this.show("Erreur lors de l'enregistrement du renouvellement de stock veuillez reesayez!","Renouvellement","error")
      }
    );
  }
    show(message:string,tete:string,type:string) {
        this.messageService.add({ severity: type, summary: tete, detail: message });
    }

}
