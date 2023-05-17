import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeaderService } from '../../components/header/header.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegionService } from 'src/app/services/region.service';
import { Region } from 'src/app/interfaces/region.interface';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegionComponent implements OnInit {
  public regionName: string = '';

  public region$: Observable<Region[]> | undefined;

  constructor(
    private headerService: HeaderService,
    private route: ActivatedRoute,
    private router: Router,
    private regionService: RegionService
  ) {}

  public ngOnInit(): void {
    this.headerService.showBackButton = true;
    this.route.paramMap.subscribe(() => {
      if (!window.history.state.region) {
        this.router.navigate(['/']);
      } else {
        this.regionName = window.history.state.region;
        this.region$ = this.regionService.getRegion(this.regionName);
      }
    });
  }

  public routeTo(country: string): void {
    this.router.navigateByUrl(`regions/${this.regionName}/${country}`, {
      state: { country: country },
    });
  }
}
