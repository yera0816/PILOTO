import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PygfinanzasComponent } from './pages/pygfinanzas/pygfinanzas.component';

const routes: Routes = [{
  path: '',
  component:PygfinanzasComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PygFinanzasRoutingModule { }
