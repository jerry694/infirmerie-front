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
import { MultiSelectModule } from 'primeng/multiselect';



@NgModule({
  declarations: [
  
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
