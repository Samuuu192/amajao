import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdComponent } from './prod/prod.component';
import { PediComponent } from './pedi/pedi.component';

const routes: Routes = [
  { path: '', component : HomeComponent },
  { path: 'produtos', component : ProdComponent},
  { path: 'pedidos', component : PediComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
