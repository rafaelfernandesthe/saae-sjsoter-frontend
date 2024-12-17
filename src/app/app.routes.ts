import { provideRouter, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login/login.component';
import { ListaImoveisComponent } from './components/imoveis/lista-imoveis/lista-imoveis.component';
import { PerfilUsuarioComponent } from './components/perfil/perfil-usuario/perfil-usuario.component';
import { PagamentoComponent } from './components/pagamento/pagamento.component';
import { CadastroImoveisComponent } from './components/imoveis/cadastro-imoveis/cadastro-imoveis.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';


export const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'perfil', component: PerfilUsuarioComponent },
    { path: 'imoveis/cadastro', component: CadastroImoveisComponent },
    { path: 'imoveis/lista', component: ListaImoveisComponent },
    { path: 'pagamentos', component: PagamentoComponent },
    { path: '**', redirectTo: '/login' }
  ];
  
  // Fornecer o roteador com as rotas definidas
  export const appRouterProviders = provideRouter(appRoutes);