import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Meus templates ...
import { TabprecoComponent } from './tabpreco/tabpreco.component';
import { TabprecolinhasComponent } from './tabprecolinhas/tabprecolinhas.component';

// Material ...
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatSortModule, MatInputModule, MatPaginatorIntl, MatIconModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { DataSource } from '@angular/cdk/collections';

import { getBrasilianPaginatorIntl } from './brasilian-paginator-Intl';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { Page404Component } from './page404/page404.component';
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    TabprecoComponent,
    TabprecolinhasComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, FormsModule,
    MatTableModule, MatSortModule, MatInputModule, MatCardModule, MatPaginatorModule, MatFormFieldModule, MatButtonModule,
    MatGridListModule, MatSliderModule, MatIconModule,
    CdkTableModule
   ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: MatPaginatorIntl, useValue: getBrasilianPaginatorIntl() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
