
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { NgbAlertModule, NgbDatepickerModule,NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { KeyFilterModule } from 'primeng/keyfilter';

import { DasboardComponent } from './connected/component/Dashboard/dasboard/dasboard.component';
import { ApercuFactureComponent } from './connected/component/Factures/apercu-facture/apercu-facture.component';
import { ListeFactureComponent } from './connected/component/Factures/liste-facture/liste-facture.component';
import { ApercuConsultationComponent } from './connected/component/Patients/apercu-consultation/apercu-consultation.component';
import { ApercuPatientComponent } from './connected/component/Patients/apercu-patient/apercu-patient.component';
import { ConsulterPatientComponent } from './connected/component/Patients/consulter-patient/consulter-patient.component';
import { CreerPatientComponent } from './connected/component/Patients/creer-patient/creer-patient.component';
import { ListeConsultationComponent } from './connected/component/Patients/liste-consultation/liste-consultation.component';
import { ListePatientComponent } from './connected/component/Patients/liste-patient/liste-patient.component';
import { ModifierPatientComponent } from './connected/component/Patients/modifier-patient/modifier-patient.component';
import { ApercuMedicamentComponent } from './connected/component/Stock/apercu-medicament/apercu-medicament.component';
import { CreerMedicamentComponent } from './connected/component/Stock/creer-medicament/creer-medicament.component';
import { ListeMedicamentComponent } from './connected/component/Stock/liste-medicament/liste-medicament.component';
import { ModifierMedicamentComponent } from './connected/component/Stock/modifier-medicament/modifier-medicament.component';
import { RenouvelerMedicamentComponent } from './connected/component/Stock/renouveler-medicament/renouveler-medicament.component';
// import { BodyComponent } from './connected/component/body/body.component';
import { HeadComponent } from './connected/component/navigations/head/head.component';
import { NavigationComponent } from './connected/component/navigations/navigation/navigation.component';
import { AgePipe } from './connected/component/pipe/age.pipe';
import { ConnectedComponent } from './connected/connected.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ConnectedRoutingModule } from './connected/connected-routing.module';
import { ConnectedModule } from './connected/connected.module';
import { ApercuSuiviComponent } from './connected/component/Patients/apercu-suivi/apercu-suivi.component';
import { SuiviConsultationComponent } from './connected/component/Patients/suivi-consultation/suivi-consultation.component';
import { AccountComponent } from './connected/component/account/account.component';
import { Building1000Component } from './connected/component/errorPages/building1000/building1000.component';
import { NotFound404Component } from './connected/component/errorPages/not-found404/not-found404.component';


// import { DatepickerPopupComponent } from './datepicker-popup/datepicker-popup.component';

@NgModule({
  declarations: [
    ConnectedComponent,
    AppComponent,
    AuthentificationComponent,
    NavigationComponent,
    HeadComponent,
    DasboardComponent,
    CreerPatientComponent,
    ListeFactureComponent,
    ListeMedicamentComponent,
    ModifierPatientComponent,
    ApercuPatientComponent,
    ListePatientComponent,
    CreerMedicamentComponent,
    ModifierMedicamentComponent,
    ApercuMedicamentComponent,
    ApercuFactureComponent,
    ConsulterPatientComponent,
    AgePipe,
    RenouvelerMedicamentComponent,
    ListeConsultationComponent,
    ApercuConsultationComponent,
    SuiviConsultationComponent,
    AccountComponent,
    NotFound404Component,
    Building1000Component,
    ApercuSuiviComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JsonPipe,
    ButtonModule,
    TableModule,
    SharedModule,
    CalendarModule,
    SelectButtonModule,
    ChartModule,
    CheckboxModule,
    ReactiveFormsModule,
    MultiSelectModule,
    ToastModule,
    MessagesModule,
    DynamicDialogModule,
    KeyFilterModule,
    ConnectedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
