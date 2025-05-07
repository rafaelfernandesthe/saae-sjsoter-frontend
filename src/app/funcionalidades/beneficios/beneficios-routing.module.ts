import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaBeneficiosComponent } from './componentes/lista-beneficios/lista-beneficios.component';
import { DetalheBeneficioComponent } from './componentes/detalhe-beneficio/detalhe-beneficio.component';

const routes: Routes = [
  { path: '', component: ListaBeneficiosComponent },
  { path: 'novo', component: DetalheBeneficioComponent },
  { path: ':id', component: DetalheBeneficioComponent }, // Rota para editar
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeneficiosRoutingModule { }
