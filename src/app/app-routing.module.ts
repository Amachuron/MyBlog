import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SectionComponent} from "./home/section/section.component";

const routes: Routes = [
  { path: 'Accueil', component: SectionComponent },
  { path: '', redirectTo: '/Accueil', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
