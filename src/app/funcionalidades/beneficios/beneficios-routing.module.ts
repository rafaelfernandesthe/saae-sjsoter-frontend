import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaBeneficiosComponent } from './componentes/lista-beneficios/lista-beneficios.component';

const routes: Routes = [
  { path: '', component: ListaBeneficiosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeneficiosRoutingModule { }
