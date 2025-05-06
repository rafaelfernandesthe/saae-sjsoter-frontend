import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomPaginatorIntl } from '../../compartilhado/customizacoes/custom-paginator-intl';
import { ImoveisRoutingModule } from './imoveis-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ImoveisRoutingModule
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: CustomPaginatorIntl }],
})
export class ImoveisModule { }
