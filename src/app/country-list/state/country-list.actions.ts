import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CountryDetail, CountryListStateKey } from './country-list.model';

export const CountryListActions = createActionGroup({
  source: CountryListStateKey,
  events: {
    'Set Current Region': props<{ region: string }>(),
    'Set Current Country': props<{ country: string }>(),
    'Reset Countries': emptyProps(),
    'Load Countries Success': props<{ countries: CountryDetail[] }>(),
    'Load Countries Error': props<{ error: any }>(),
  },
});
