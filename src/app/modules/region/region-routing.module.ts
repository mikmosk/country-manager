import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionComponent } from './region.component';

const routes: Routes = [
  { path: '', component: RegionComponent },
  {
    path: ':country',
    loadChildren: () =>
      import('./../country/country.module').then((m) => m.CountryModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegionRoutingModule {}
