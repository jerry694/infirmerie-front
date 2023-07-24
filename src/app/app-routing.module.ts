import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasboardComponent } from './Dashboard/dasboard/dasboard.component';
import { CreerPatientComponent } from './Patients/creer-patient/creer-patient.component';
import { ListeFactureComponent } from './Factures/liste-facture/liste-facture.component';
import { ListeMedicamentComponent } from './Stock/liste-medicament/liste-medicament.component';

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',component:DasboardComponent},
  {path:'patient/creer',component:CreerPatientComponent},
  {path:'facture/liste',component:ListeFactureComponent},
  {path:'medicament/liste',component:ListeMedicamentComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
