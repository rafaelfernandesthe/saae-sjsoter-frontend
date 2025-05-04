import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTaxasComponent } from './componentes/lista-taxas/lista-taxas.component';
import { DetalheTaxaComponent } from './componentes/detalhe-taxa/detalhe-taxa.component';

const routes: Routes = [
  { path: '', component: ListaTaxasComponent },
  { path: 'novo', component: DetalheTaxaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracaoTaxasImpostosRoutingModule { }
