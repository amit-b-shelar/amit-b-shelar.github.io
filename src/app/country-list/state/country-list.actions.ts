import { createActionGroup, props } from '@ngrx/store';
import { CountryDetail, CountryListStateKey } from './country-list.model';

export const CountryListActions = createActionGroup({
  source: CountryListStateKey,
  events: {
    'Set Current Region': props<{ region: string }>(),
    'Set Countries': props<{ countries: CountryDetail[] }>(),
    'Set Current Country': props<{ country: string }>(),
  },
});
