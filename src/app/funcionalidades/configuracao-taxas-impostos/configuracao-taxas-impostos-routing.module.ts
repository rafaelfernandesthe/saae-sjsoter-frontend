import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTaxasComponent } from './componentes/lista-taxas/lista-taxas.component';

const routes: Routes = [
  { path: '', component: ListaTaxasComponent },
  {
    path: 'novo',
    loadComponent: () =>
      import('./componentes/detalhe-taxa/detalhe-taxa.component').then(m => m.DetalheTaxaComponent),
  },
  {
    path: 'editar/:id',
    loadComponent: () =>
      import('./componentes/detalhe-taxa/detalhe-taxa.component').then(m => m.DetalheTaxaComponent),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracaoTaxasImpostosRoutingModule { }
