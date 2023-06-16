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
  on(CountryListActions.setCurrentRegion, (state, action): CountryListState => {
    return {
      ...state,
      currentRegion: action.region,
    };
  }),
  on(CountryListActions.setCountries, (state, action): CountryListState => {
    return {
      ...state,
      countries: action.countries,
    };
  }),
  on(
    CountryListActions.setCurrentCountry,
    (state, action): CountryListState => {
      return {
        ...state,
        currentCountry: action.country,
      };
    }
  )
);
