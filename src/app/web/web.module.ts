import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { HomeComponent } from './home/home.component';
import { SharingModule } from '../sharing/sharing.module';
import { ContainerComponent } from './container/container.component';
import { ChildFirstComponent } from './child-first/child-first.component';
import { ChildSecondComponent } from './child-second/child-second.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [HomeComponent, ContainerComponent, ChildFirstComponent, ChildSecondComponent],
  imports: [
    CommonModule,
    WebRoutingModule,
    SharingModule,
    BsDatepickerModule.forRoot()
  ]
})
export class WebModule { }
