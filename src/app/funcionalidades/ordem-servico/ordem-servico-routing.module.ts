import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaOrdensComponent } from './componentes/lista-ordens/lista-ordens.component';
import { DetalheOrdemComponent } from './componentes/detalhe-ordem/detalhe-ordem.component';

const routes: Routes = [
  { path: '', component: ListaOrdensComponent },
  { path: 'novo', component: DetalheOrdemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdemServicoRoutingModule { }
