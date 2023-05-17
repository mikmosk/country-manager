import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { HeaderService } from 'src/app/components/header/header.service';
import { Country } from 'src/app/interfaces/country.interface';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryComponent implements OnInit {
  public country$: Observable<Country> | undefined;

  private countryName: string = '';

  constructor(
    private countryService: CountryService,
    private headerService: HeaderService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.headerService.showBackButton = true;
    this.route.paramMap.subscribe(() => {
      if (!window.history.state.country) {
        this.router.navigate(['/']);
      } else {
        this.countryName = window.history.state.country;
        this.country$ = this.countryService
          .getCountry(this.countryName)
          .pipe(map((result: Country[]) => result[0]));
      }
    });
  }
}
