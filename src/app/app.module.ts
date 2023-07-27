import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { NavigationComponent } from './navigations/navigation/navigation.component';
import { HeadComponent } from './navigations/head/head.component';
import { DasboardComponent } from './Dashboard/dasboard/dasboard.component';
import { CreerPatientComponent } from './Patients/creer-patient/creer-patient.component';
import { ListeFactureComponent } from './Factures/liste-facture/liste-facture.component';
import { ListeMedicamentComponent } from './Stock/liste-medicament/liste-medicament.component';
import { BodyComponent } from './body/body.component';
import { PageComponent } from './page/page.component';


import { NgbModule,NgbAlertModule,NgbDropdownModule, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { JsonPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    NavigationComponent,
    HeadComponent,
    DasboardComponent,
    CreerPatientComponent,
    ListeFactureComponent,
    ListeMedicamentComponent,
    BodyComponent,
    PageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbDatepickerModule, 
    NgbAlertModule, 
    JsonPipe,
    NgbModule,
    NgbDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
