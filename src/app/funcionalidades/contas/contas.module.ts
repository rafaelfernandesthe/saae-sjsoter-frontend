import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContasRoutingModule } from './contas-routing.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomPaginatorIntl } from '../../compartilhado/customizacoes/custom-paginator-intl';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContasRoutingModule
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: CustomPaginatorIntl }],
})
export class ContasModule { }
