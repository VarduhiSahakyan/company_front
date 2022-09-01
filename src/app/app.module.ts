import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {HttpClientModule} from "@angular/common/http";
import {EmployeeService} from "./employee/employee.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditEmployeeComponent } from './employee/edit/edit-employee.component';
import { AddEmployeeComponent } from './employee/add/add-employee.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatNativeDateModule} from "@angular/material/core";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {PortalModule} from "@angular/cdk/portal";
import {MatTreeModule} from "@angular/material/tree";
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EditEmployeeComponent,
    AddEmployeeComponent

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    MatDialogModule
  ],
  providers: [EmployeeService,
    AddEmployeeComponent,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
