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

const routes: Routes = [
  {path:'',redirectTo:'/auth',pathMatch:'full'},
  {path:'auth',component:AuthentificationComponent},
  // {path:'page',component:PageComponent},

  {path:'dashboard',component:DasboardComponent},
  {path:'patient',component:ListePatientComponent},
  {path:'patient/creer',component:CreerPatientComponent},
  {path:'patient/modifier/:idEtudiant',component:ModifierPatientComponent},
  {path:'patient/apercu/:idEtudiant',component:ApercuPatientComponent},
  {path:'facture/liste',component:ListeFactureComponent},
  {path:'medicament/liste',component:ListeMedicamentComponent},
  // {path:'**',redirectTo:'dashboard',pathMatch:'full'},//404 NOT FOUND

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
