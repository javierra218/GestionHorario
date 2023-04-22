import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { RecursoComponent } from '../recurso/components/recurso/recurso.component';
import { HomeComponent } from './components/home/home.component';

 const childRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'recurso', component: RecursoComponent }
 ]
@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule]
})
export class RouterChildModule { }
