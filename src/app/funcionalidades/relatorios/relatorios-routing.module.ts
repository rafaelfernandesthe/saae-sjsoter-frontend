import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaRelatoriosComponent } from './componentes/lista-relatorios/lista-relatorios.component';

const routes: Routes = [
  { path: '', component: ListaRelatoriosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatoriosRoutingModule { }
