import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchivoComponent } from './components/archivo/archivo.component';
import { MaterialModule } from '../shared/material.module';



@NgModule({
  declarations: [
    ArchivoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
    // agregar importaciones 
  ]
})
export class ArchivoModule { }
