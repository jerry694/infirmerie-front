import { ToastModule } from 'primeng/toast';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/admin/header/header.component';
import { SidebarComponent } from './shared/components/admin/sidebar/sidebar.component';
import { AdminComponent } from './modules/admin/admin.component';
import { AccueilComponent } from './modules/admin/components/accueil/accueil.component';
import { InterventionsComponent } from './modules/admin/components/interventions/interventions.component';
import { StatistiquesComponent } from './modules/admin/components/statistiques/statistiques.component';
import { UserComponent } from './modules/user/user.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { ResetComponent } from './modules/authentication/reset/reset.component';
import { ButtonModule } from "primeng/button";
import { BadgeModule } from "primeng/badge";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { LoginPersonnelComponent } from './modules/authentication/login-personnel/login-personnel.component';
import { AuthenticationComponent } from './modules/authentication/authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    AdminComponent,
    AccueilComponent,
    InterventionsComponent,
    StatistiquesComponent,
    UserComponent,
    LoginComponent,
    ResetComponent,
    LoginPersonnelComponent,
    AuthenticationComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    BadgeModule,
    ToastModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
