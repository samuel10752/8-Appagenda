import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
    AgendaDetalhesPageRoutingModule
  ],
  declarations: [AgendaDetalhesPage]
})
export class AgendaDetalhesPageModule {}
