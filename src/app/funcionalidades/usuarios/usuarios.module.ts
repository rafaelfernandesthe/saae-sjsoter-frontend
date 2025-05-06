import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomPaginatorIntl } from '../../compartilhado/customizacoes/custom-paginator-intl';
import { UsuariosRoutingModule } from './usuarios-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: CustomPaginatorIntl }],
})
export class UsuariosModule { }
