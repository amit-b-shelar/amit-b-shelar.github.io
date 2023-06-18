import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CountryListState } from '../state/country-list.model';
import * as CountryListSelectors from './../state/country-list.selectors';
import { CountryListActions } from './../state/country-list.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-country-list-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  regions$ = this.store.select(CountryListSelectors.selectRegions);
  currentRegion$ = this.store.select(CountryListSelectors.selectCurrentRegion);
  countries$ = this.store.select(CountryListSelectors.selectCountries);
  currentCountry$ = this.store.select(
    CountryListSelectors.selectCurrentCountry
  );
  currentCountryDetail$ = this.store.select(
    CountryListSelectors.selectCurrentCountryDetail
  );

  constructor(private store: Store<CountryListState>) {}

  ngOnInit(): void {}

  OnSelectedRegionChanged(region: string) {
    this.store.dispatch(CountryListActions.setCurrentRegion({ region }));
  }

  OnSelectedCountryChanged(country: string) {
    this.store.dispatch(CountryListActions.setCurrentCountry({ country }));
  }
}
