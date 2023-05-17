import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionRoutingModule } from './region-routing.module';
import { RegionComponent } from './region.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [RegionComponent, CardComponent],
  imports: [CommonModule, SharedModule, RegionRoutingModule],
})
export class RegionModule {}
