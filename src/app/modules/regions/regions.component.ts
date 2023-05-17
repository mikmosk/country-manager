import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/header/header.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegionsComponent {
  constructor(private router: Router, private header: HeaderService) {}

  ngOnInit(): void {
    this.header.showBackButton = false;
  }

  public routeTo(region: string) {
    this.router.navigateByUrl(`regions/${region}`, {
      state: { region: region },
    });
  }
}
