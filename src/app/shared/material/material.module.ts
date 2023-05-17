import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    MatTableModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
  exports: [
    MatTableModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
})
export class MaterialModule {}
