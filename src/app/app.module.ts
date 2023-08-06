import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
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


import { NgbAlertModule, NgbDatepickerModule,NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonPipe } from '@angular/common';
import { ModifierPatientComponent } from './Patients/modifier-patient/modifier-patient.component';
import { ApercuPatientComponent } from './Patients/apercu-patient/apercu-patient.component';
import { ListePatientComponent } from './Patients/liste-patient/liste-patient.component';
import { CreerMedicamentComponent } from './Stock/creer-medicament/creer-medicament.component';
import { ModifierMedicamentComponent } from './Stock/modifier-medicament/modifier-medicament.component';
import { ApercuMedicamentComponent } from './Stock/apercu-medicament/apercu-medicament.component';
import { ApercuFactureComponent } from './Factures/apercu-facture/apercu-facture.component';
import { ConsulterPatientComponent } from './Patients/consulter-patient/consulter-patient.component';
import { AgePipe } from 'src/app/pipe/age.pipe';

// import { DatepickerPopupComponent } from './datepicker-popup/datepicker-popup.component';

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
    ModifierPatientComponent,
    ApercuPatientComponent,
    ListePatientComponent,
    CreerMedicamentComponent,
    ModifierMedicamentComponent,
    ApercuMedicamentComponent,
    ApercuFactureComponent,
    ConsulterPatientComponent,
    AgePipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbDatepickerModule, 
    NgbAlertModule, 
    JsonPipe,
    NgbTimepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
