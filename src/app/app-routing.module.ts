import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadComponent: () => import('../pages/machine/machine.component').then(c => c.MachineComponent) },
  { path: 'units', loadComponent: () => import('../pages/unit/unit.component').then(c => c.UnitComponent) },
  { path: 'samples', loadComponent: () => import('../pages/sample/sample.component').then(c => c.SampleComponent) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
