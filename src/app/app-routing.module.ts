import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ConnectedComponent } from './connected/connected.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ListePatientComponent } from './connected/component/Patients/liste-patient/liste-patient.component';
import { DasboardComponent } from './connected/component/Dashboard/dasboard/dasboard.component';
import { ApercuFactureComponent } from './connected/component/Factures/apercu-facture/apercu-facture.component';
import { ListeFactureComponent } from './connected/component/Factures/liste-facture/liste-facture.component';
import { ApercuConsultationComponent } from './connected/component/Patients/apercu-consultation/apercu-consultation.component';
import { ApercuPatientComponent } from './connected/component/Patients/apercu-patient/apercu-patient.component';
import { ConsulterPatientComponent } from './connected/component/Patients/consulter-patient/consulter-patient.component';
import { CreerPatientComponent } from './connected/component/Patients/creer-patient/creer-patient.component';
import { ListeConsultationComponent } from './connected/component/Patients/liste-consultation/liste-consultation.component';
import { ModifierPatientComponent } from './connected/component/Patients/modifier-patient/modifier-patient.component';
import { ApercuMedicamentComponent } from './connected/component/Stock/apercu-medicament/apercu-medicament.component';
import { CreerMedicamentComponent } from './connected/component/Stock/creer-medicament/creer-medicament.component';
import { ListeMedicamentComponent } from './connected/component/Stock/liste-medicament/liste-medicament.component';
import { ModifierMedicamentComponent } from './connected/component/Stock/modifier-medicament/modifier-medicament.component';
import { RenouvelerMedicamentComponent } from './connected/component/Stock/renouveler-medicament/renouveler-medicament.component';
import { SuiviConsultationComponent } from './connected/component/Patients/suivi-consultation/suivi-consultation.component';
import { AccountComponent } from './connected/component/account/account.component';
import { ConnectedRoutingModule } from './connected/connected-routing.module';
import { ConnectedModule } from './connected/connected.module';
import { Building1000Component } from './connected/component/errorPages/building1000/building1000.component';
import { NotFound404Component } from './connected/component/errorPages/not-found404/not-found404.component';

const routes: Routes = [
  { path: 'auth', component: AuthentificationComponent},
  { path: 'connect', component: ConnectedComponent, loadChildren: () => import('./connected/connected.module').then(m => m.ConnectedModule) },
  
  { path: 'dashboard', component: DasboardComponent },

  { path: 'patient', component: ListePatientComponent },
  { path: 'patient/creer', component: CreerPatientComponent },
  { path: 'patient/modifier/:idEtudiant', component: ModifierPatientComponent },
  { path: 'patient/apercu/:idEtudiant', component: ApercuPatientComponent },
  { path: 'patient/consulter/:idEtudiant', component: ConsulterPatientComponent },

  { path: 'consultation', component: ListeConsultationComponent },
  { path: 'consultation/apercu/:idFicheConsultation', component: ApercuConsultationComponent },
  { path: 'consultation/suivre/:idEtudiant/:idFicheConsultation', component: SuiviConsultationComponent },

  { path: 'medicament', component: ListeMedicamentComponent },
  { path: 'medicament/creer', component: CreerMedicamentComponent },
  { path: 'medicament/modifier/:idMedicament', component: ModifierMedicamentComponent },
  { path: 'medicament/renouveler/:idMedicament', component: RenouvelerMedicamentComponent },
  { path: 'medicament/apercu/:idMedicament', component: ApercuMedicamentComponent },

  { path: 'facture', component: ListeFactureComponent },
  { path: 'facture/apercu/:idFacture', component: ApercuFactureComponent },

  { path: 'account', component: AccountComponent },

  {path:'building',component:Building1000Component},
  {path:'notFound',component:NotFound404Component},
  

  // { path: '', redirectTo: 'auth', pathMatch: 'full' },
  // { path: '**', redirectTo: '', pathMatch: 'full' } // 404 NOT FOUND


  // { path: 'auth', component: AuthentificationComponent },
  // { path: 'connect', component: ConnectedComponent }, // Ne pas utiliser loadChildren ici
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'notFound', pathMatch: 'full' } // 404 NOT FOUND
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
