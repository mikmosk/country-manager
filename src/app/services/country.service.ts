import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private readonly apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  public getCountry(country: string): Observable<Country[]> {
    return this.http.get<Country[]>(
      `${this.apiUrl}/name/${country}?fullText=true`
    );
  }
}
