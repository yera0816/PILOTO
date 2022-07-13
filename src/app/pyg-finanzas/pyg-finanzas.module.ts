import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PygFinanzasRoutingModule } from './pyg-finanzas-routing.module';
import { PygfinanzasComponent } from './pages/pygfinanzas/pygfinanzas.component';


@NgModule({
  declarations: [
    PygfinanzasComponent
  ],
  imports: [
    CommonModule,
    PygFinanzasRoutingModule
  ]
})
export class PygFinanzasModule { }
