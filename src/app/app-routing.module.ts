import { UserComponent } from './modules/user/user.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { AdminComponent } from './modules/admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './modules/authentication/authentication.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    // pathMatch: 'full'
    // canActivate: [AdminGuardModule]
  },
  {
    path: 'home',
    component: HomeComponent,
    // loadChildren: () => import('./app.module').then(m => m.AppModule),
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthenticationComponent,
    loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule),
    // pathMatch: 'full'
  },
  {
    path: 'user',
    component: UserComponent,
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
    // pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
