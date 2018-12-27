import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared/shared.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [SharedComponent, HttpClientModule]
})
export class SharingModule { }
