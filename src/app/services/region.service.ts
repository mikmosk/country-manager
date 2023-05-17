import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Region } from '../interfaces/region.interface';

@Injectable({
  providedIn: 'root',
})
export class RegionService {
  private readonly apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  public getRegion(region: string): Observable<Region[]> {
    return this.http.get<Region[]>(`${this.apiUrl}/region/${region}`);
  }
}
