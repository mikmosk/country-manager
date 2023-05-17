import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(private dialog: MatDialog) {}

  public openDialog() {
    this.dialog.open(AboutComponent, { width: '350px' });
  }
}
