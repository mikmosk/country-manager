import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { JoinPipe } from './pipes/join.pipe';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [JoinPipe, LoaderComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, JoinPipe, LoaderComponent],
})
export class SharedModule {}
