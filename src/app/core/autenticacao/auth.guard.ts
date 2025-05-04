import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Verifica se o código está sendo executado no navegador
  if (typeof window !== 'undefined' && localStorage.getItem('usuario')) {
    return true; // Usuário autenticado
  }

  // Redireciona para a tela de login
  router.navigate(['/login']);
  return false;
};
