import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasboardComponent } from './component/Dashboard/dasboard/dasboard.component';
import { ApercuFactureComponent } from './component/Factures/apercu-facture/apercu-facture.component';
import { ListeFactureComponent } from './component/Factures/liste-facture/liste-facture.component';
import { ApercuConsultationComponent } from './component/Patients/apercu-consultation/apercu-consultation.component';
import { ApercuPatientComponent } from './component/Patients/apercu-patient/apercu-patient.component';
import { ConsulterPatientComponent } from './component/Patients/consulter-patient/consulter-patient.component';
import { CreerPatientComponent } from './component/Patients/creer-patient/creer-patient.component';
import { ListeConsultationComponent } from './component/Patients/liste-consultation/liste-consultation.component';
import { ListePatientComponent } from './component/Patients/liste-patient/liste-patient.component';
import { ModifierPatientComponent } from './component/Patients/modifier-patient/modifier-patient.component';
import { ApercuMedicamentComponent } from './component/Stock/apercu-medicament/apercu-medicament.component';
import { CreerMedicamentComponent } from './component/Stock/creer-medicament/creer-medicament.component';
import { ListeMedicamentComponent } from './component/Stock/liste-medicament/liste-medicament.component';
import { ModifierMedicamentComponent } from './component/Stock/modifier-medicament/modifier-medicament.component';
import { RenouvelerMedicamentComponent } from './component/Stock/renouveler-medicament/renouveler-medicament.component';
import { ConnectedComponent } from './connected.component';
import { AccountComponent } from './component/account/account.component';
import { ApercuSuiviComponent } from './component/Patients/apercu-suivi/apercu-suivi.component';



const routes: Routes = [

  { path: '', component: ConnectedComponent, pathMatch: 'full' },

  { path: 'dashboard', component: DasboardComponent },

  { path: 'patient', component: ListePatientComponent },
  { path: 'patient/creer', component: CreerPatientComponent },
  { path: 'patient/modifier/:idEtudiant', component: ModifierPatientComponent },
  { path: 'patient/apercu/:idEtudiant', component: ApercuPatientComponent },
  { path: 'patient/consulter/:idEtudiant', component: ConsulterPatientComponent },

  { path: 'consultation', component: ListeConsultationComponent },
  { path: 'consultation/apercu/:idFicheConsultation', component: ApercuConsultationComponent },

  { path: 'medicament', component: ListeMedicamentComponent },
  { path: 'medicament/creer', component: CreerMedicamentComponent },
  { path: 'medicament/modifier/:idMedicament', component: ModifierMedicamentComponent },
  { path: 'medicament/renouveler/:idMedicament', component: RenouvelerMedicamentComponent },
  { path: 'medicament/apercu/:idMedicament', component: ApercuMedicamentComponent },

  { path: 'consultation/suivre/apercu/:idFicheSuivi', component: ApercuSuiviComponent },
  
  { path: 'facture', component: ListeFactureComponent },
  { path: 'facture/apercu/:idFacture', component: ApercuFactureComponent },

  { path: 'account', component: AccountComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectedRoutingModule { }
