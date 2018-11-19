import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabprecoComponent } from './tabpreco/tabpreco.component';
import { TabprecolinhasComponent } from './tabprecolinhas/tabprecolinhas.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'home', component: WelcomeComponent },
  { path: 'tabpreco/:linha', component: TabprecoComponent },
  { path: 'linhas', component: TabprecolinhasComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
