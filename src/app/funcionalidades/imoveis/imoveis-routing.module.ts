import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaImoveisComponent } from './componentes/lista-imoveis/lista-imoveis.component';
import { DetalheImovelComponent } from './componentes/detalhe-imovel/detalhe-imovel.component';

const routes: Routes = [
  { path: '', component: ListaImoveisComponent },
  { path: 'novo', component: DetalheImovelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImoveisRoutingModule { }
