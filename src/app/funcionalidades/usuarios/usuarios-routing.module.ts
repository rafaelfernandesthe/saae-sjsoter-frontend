import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { DetalheUsuarioComponent } from './componentes/detalhe-usuario/detalhe-usuario.component';

const routes: Routes = [
  { path: '', component: ListaUsuariosComponent },
  { path: 'novo', component: DetalheUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
