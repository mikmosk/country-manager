import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'regions',
    loadChildren: () =>
      import('./modules/regions/regions.module').then((m) => m.RegionsModule),
  },
  {
    path: '**',
    redirectTo: 'regions',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
