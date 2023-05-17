import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionsComponent } from './regions.component';

const routes: Routes = [
  { path: '', component: RegionsComponent },
  {
    path: ':region',
    loadChildren: () =>
      import('./../region/region.module').then((m) => m.RegionModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegionsRoutingModule {}
