import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginPersonnelComponent } from './login-personnel/login-personnel.component';
import { AuthenticationComponent } from './authentication.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    pathMatch: 'full'
  },
  {
    path: 'etudiantLogin',
    component: LoginComponent
  },
  {
    path: 'personnelLogin',
    component: LoginPersonnelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
