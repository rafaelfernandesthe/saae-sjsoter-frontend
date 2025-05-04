import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaContasComponent } from './componentes/lista-contas/lista-contas.component';
import { DetalheContaComponent } from './componentes/detalhe-conta/detalhe-conta.component';

const routes: Routes = [
  { path: '', component: ListaContasComponent },
  { path: 'novo', component: DetalheContaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContasRoutingModule { }
