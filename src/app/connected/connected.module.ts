import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';

import { ConnectedRoutingModule } from './connected-routing.module';


import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgbDatepickerModule, NgbAlertModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from '../app-routing.module';
import { SuiviConsultationComponent } from './component/Patients/suivi-consultation/suivi-consultation.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { AccountComponent } from './component/account/account.component';
import { NotFound404Component } from './component/errorPages/not-found404/not-found404.component';
import { Building1000Component } from './component/errorPages/building1000/building1000.component';



@NgModule({
  declarations: [
  
    SuiviConsultationComponent,
       AccountComponent,
       NotFound404Component,
       Building1000Component
  ],
  imports: [
    CommonModule,
    ConnectedRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    // NgbDatepickerModule, 
    // NgbAlertModule, 
    // NgbTimepickerModule,
    JsonPipe,
    ButtonModule,
    TableModule,
    SharedModule,
    CalendarModule,
    SelectButtonModule,
    ChartModule,
    CheckboxModule,
    MultiSelectModule
  ]
})
export class ConnectedModule { }
