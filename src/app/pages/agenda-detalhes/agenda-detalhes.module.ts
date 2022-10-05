import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaDetalhesPageRoutingModule } from './agenda-detalhes-routing.module';

import { AgendaDetalhesPage } from './agenda-detalhes.page';
import { SimpleMaskModule } from 'ngx-ion-simple-mask';


@NgModule({
  imports: [
    SimpleMaskModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaDetalhesPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [AgendaDetalhesPage]
})
export class AgendaDetalhesPageModule {}
