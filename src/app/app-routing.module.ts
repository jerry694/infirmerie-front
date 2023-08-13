import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasboardComponent } from './Dashboard/dasboard/dasboard.component';
import { CreerPatientComponent } from './Patients/creer-patient/creer-patient.component';
import { ListeFactureComponent } from './Factures/liste-facture/liste-facture.component';
import { ListeMedicamentComponent } from './Stock/liste-medicament/liste-medicament.component';
import { PageComponent } from './page/page.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ModifierPatientComponent } from './Patients/modifier-patient/modifier-patient.component';
import { ApercuPatientComponent } from './Patients/apercu-patient/apercu-patient.component';
import { ListePatientComponent } from './Patients/liste-patient/liste-patient.component';
import { CreerMedicamentComponent } from './Stock/creer-medicament/creer-medicament.component';
import { ModifierMedicamentComponent } from './Stock/modifier-medicament/modifier-medicament.component';
import { ApercuMedicamentComponent } from './Stock/apercu-medicament/apercu-medicament.component';
import { ApercuFactureComponent } from './Factures/apercu-facture/apercu-facture.component';
import { ConsulterPatientComponent } from './Patients/consulter-patient/consulter-patient.component';
import { RenouvelerMedicamentComponent } from './Stock/renouveler-medicament/renouveler-medicament.component';
import { ListeConsultationComponent } from './Patients/liste-consultation/liste-consultation.component';
import { ApercuConsultationComponent } from './Patients/apercu-consultation/apercu-consultation.component';

const routes: Routes = [
  {path:'',redirectTo:'/auth',pathMatch:'full'},
  {path:'auth',component:AuthentificationComponent},
  // {path:'page',component:PageComponent},

  {path:'dashboard',component:DasboardComponent},

  {path:'patient',component:ListePatientComponent},
  {path:'patient/creer',component:CreerPatientComponent},
  {path:'patient/modifier/:idEtudiant',component:ModifierPatientComponent},
  {path:'patient/apercu/:idEtudiant',component:ApercuPatientComponent},
  {path:'patient/consulter/:idEtudiant',component:ConsulterPatientComponent},

  {path:'consultation',component:ListeConsultationComponent},
  {path:'consultation/apercu/:idFicheConsultation',component:ApercuConsultationComponent},

  {path:'medicament',component:ListeMedicamentComponent},
  {path:'medicament/creer',component:CreerMedicamentComponent},
  {path:'medicament/modifier/:idMedicament',component:ModifierMedicamentComponent},
  {path:'medicament/renouveler/:idMedicament',component:RenouvelerMedicamentComponent},
  {path:'medicament/apercu/:idMedicament',component:ApercuMedicamentComponent},

  {path:'facture',component:ListeFactureComponent},
  {path:'facture/apercu/:idFacture',component:ApercuFactureComponent},

  {path:'**',redirectTo:'dashboard',pathMatch:'full'},//404 NOT FOUND

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
