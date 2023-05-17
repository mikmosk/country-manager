import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    public headerService: HeaderService,
    private location: Location
  ) {}

  public goBack() {
    this.location.back();
  }
}
