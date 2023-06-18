import { createReducer, on } from '@ngrx/store';
import { CountryListState } from './country-list.model';
import { CountryListActions } from './country-list.actions';

const initialState: CountryListState = {
  regions: ['Europe', 'Asia'],
  currentRegion: '',
  countries: [],
  currentCountry: '',
};

export const countryListReducer = createReducer(
  initialState,
  on(
    CountryListActions.setCurrentRegion,
    (state, action): CountryListState => ({
      ...state,
      countries: [],
      currentRegion: action.region,
    })
  ),
  on(
    CountryListActions.loadCountriesSuccess,
    (state, action): CountryListState => ({
      ...state,
      countries: action.countries,
    })
  ),
  on(
    CountryListActions.setCurrentCountry,
    (state, action): CountryListState => ({
      ...state,
      currentCountry: action.country,
    })
  ),
  on(
    CountryListActions.loadCountriesError,
    (state): CountryListState => ({
      ...state,
      countries: [],
      currentCountry: '',
    })
  )
);
