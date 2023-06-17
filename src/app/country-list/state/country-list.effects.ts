import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CountryListService } from '../services/country-list.service';
import { CountryListActions } from './country-list.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CountryDetail } from './country-list.model';
import { EMPTY, of } from 'rxjs';

@Injectable()
export class CountryListEffects {
  private cache = new Map<string, CountryDetail[]>();

  constructor(
    private actions$: Actions,
    private countryListService: CountryListService
  ) {}

  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountryListActions.setCurrentRegion),
      switchMap(({ region }) => {
        if (this.cache.has(region)) {
          // Return From Cache
          return of(
            CountryListActions.loadCountriesSuccess({
              countries: this.cache.get(region) as CountryDetail[],
            })
          );
        } else {
          // Call Service
          return this.countryListService.getCountries(region).pipe(
            map((countries) => {
              this.cache.set(region, countries);
              return CountryListActions.loadCountriesSuccess({ countries });
            }),
            catchError(() => EMPTY)
          );
        }
      })
    )
  );
}
