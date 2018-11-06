import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Meus templates ...
import { TabprecoComponent } from './tabpreco/tabpreco.component';
import { TabprecolinhasComponent } from './tabprecolinhas/tabprecolinhas.component';

// Material ...
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatSortModule, MatInputModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatTableDataSource } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

// FlexUiDataTable
import { FlxUiDatatableModule, FlxUiDataTable } from 'flx-ui-datatable';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    TabprecoComponent,
    TabprecolinhasComponent
    // MatTableDataSource
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule, MatSortModule, MatInputModule, MatCardModule, MatPaginatorModule, MatFormFieldModule, MatButtonModule,
    MatGridListModule,
    FlxUiDatatableModule
   ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    FlxUiDataTable
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
