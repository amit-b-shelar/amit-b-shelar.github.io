import { Injectable } from '@angular/core';
import { CountryDetail } from '../state/country-list.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CountryListService {
  constructor(private http: HttpClient) {}

  getCountries(region: string): Observable<CountryDetail[]> {
    const apiUrl = `https://restcountries.com/v2/region/${region}`;
    if (region) {
      return this.http.get<CountryDetail[]>(apiUrl).pipe(
        map((countries) => {
          return countries.map(
            ({ name, capital, currencies, flag, population }) => ({
              name,
              capital,
              currencies,
              flag,
              population,
            })
          );
        })
      );
    } else {
      return of([]);
    }
  }
}
