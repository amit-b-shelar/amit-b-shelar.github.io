import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountryListState, CountryListStateKey } from './country-list.model';

const selectCountryListState =
  createFeatureSelector<CountryListState>(CountryListStateKey);

export const selectRegions = createSelector(
  selectCountryListState,
  (state) => state.regions
);
export const selectCurrentRegion = createSelector(
  selectCountryListState,
  (state) => state.currentRegion
);
export const selectCountries = createSelector(selectCountryListState, (state) =>
  state.countries.map((c) => c.name)
);
export const selectCurrentCountry = createSelector(
  selectCountryListState,
  (state) => state.currentCountry
);
export const selectCurrentCountryDetail = createSelector(
  selectCountryListState,
  (state) =>
    state.countries.find((c) => c.name === state.currentCountry) || null
);
