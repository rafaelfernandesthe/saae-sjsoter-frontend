import { Routes } from '@angular/router';
import { authGuard } from './core/autenticacao/auth.guard';
import { AuthenticatedLayoutComponent } from './core/layouts/authenticated-layout/authenticated-layout.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./funcionalidades/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: '',
    component: AuthenticatedLayoutComponent, // Usa o layout autenticado
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./funcionalidades/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'usuarios',
        loadChildren: () =>
          import('./funcionalidades/usuarios/usuarios.module').then((m) => m.UsuariosModule),
      },
      {
        path: 'imoveis',
        loadChildren: () =>
          import('./funcionalidades/imoveis/imoveis.module').then((m) => m.ImoveisModule),
      },
      {
        path: 'beneficios',
        loadChildren: () =>
          import('./funcionalidades/beneficios/beneficios.module').then((m) => m.BeneficiosModule),
      },
      {
        path: 'configuracao-taxas-impostos',
        loadChildren: () =>
          import('./funcionalidades/configuracao-taxas-impostos/configuracao-taxas-impostos.module').then(
            (m) => m.ConfiguracaoTaxasImpostosModule
          ),
      },
      {
        path: 'contas',
        loadChildren: () =>
          import('./funcionalidades/contas/contas.module').then((m) => m.ContasModule),
      },
      {
        path: 'relatorios',
        loadChildren: () =>
          import('./funcionalidades/relatorios/relatorios.module').then((m) => m.RelatoriosModule),
      },
      {
        path: 'ordem-servico',
        loadChildren: () =>
          import('./funcionalidades/ordem-servico/ordem-servico.module').then((m) => m.OrdemServicoModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
