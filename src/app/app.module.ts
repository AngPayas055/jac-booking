import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './modules/main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SecurityComponent } from './modules/security/security.component';
import { InputTextModule } from 'primeng/inputtext';
import { TreeSelectModule } from 'primeng/treeselect';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { AppSettings } from './app-settings';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './modules/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    SecurityComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    InputTextModule,
    TreeSelectModule,
    DropdownModule,
    CalendarModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AppSettings],
  bootstrap: [AppComponent]
})
export class AppModule { }
