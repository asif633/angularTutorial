import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'movies-actors', component: ContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
