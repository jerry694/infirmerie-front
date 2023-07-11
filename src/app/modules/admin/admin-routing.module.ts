import { InterventionsComponent } from './components/interventions/interventions.component';
import { StatistiquesComponent } from './components/statistiques/statistiques.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    pathMatch: 'full'
  },
  {
    path: 'accueil',
    component: AccueilComponent
  },
  {
    path: 'statistiques',
    component: StatistiquesComponent
  },
  {
    path: 'interventions',
    component: InterventionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
