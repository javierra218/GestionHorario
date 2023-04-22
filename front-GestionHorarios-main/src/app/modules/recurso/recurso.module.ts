import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecursoComponent } from './components/recurso/recurso.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewrecursoComponent } from './components/newrecurso/newrecurso.component';



@NgModule({
  declarations: [
    RecursoComponent,
    NewrecursoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RecursoModule { }
