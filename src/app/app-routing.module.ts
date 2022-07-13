import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

const routes: Routes = [
 { path:'auth',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
 { path:'pyg',loadChildren:()=>import('./pyg-finanzas/pyg-finanzas.module').then(m=>m.PygFinanzasModule)},
 {path:'**', redirectTo:'auth'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
