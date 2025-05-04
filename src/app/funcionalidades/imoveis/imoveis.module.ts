import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImoveisRoutingModule } from './imoveis-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomPaginatorIntl } from '../../compartilhado/customizacoes/custom-paginator-intl';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ImoveisRoutingModule,
    HttpClientModule
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: CustomPaginatorIntl }],
})
export class ImoveisModule { }
