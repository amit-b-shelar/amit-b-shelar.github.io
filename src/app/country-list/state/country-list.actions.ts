import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CountryDetail, CountryListStateKey } from './country-list.model';

export const CountryListActions = createActionGroup({
  source: CountryListStateKey,
  events: {
    'Set Current Region': props<{ region: string }>(),
    'Set Current Country': props<{ country: string }>(),
    'Load Countries Success': props<{ countries: CountryDetail[] }>(),
    'Load Countries Error': emptyProps(),
  },
});
