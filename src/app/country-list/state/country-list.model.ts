export const CountryListStateKey = "country-list";

export interface CountryListState {
  regions: string[];
  currentRegion: string;
  countries: CountryDetail[];
  currentCountry: string;
}

export interface CountryDetail {
  name: string;
  capital: string;
  population: number;
  currencies: CurrencyDetail[];
  flag: string;
}

export interface CurrencyDetail {
  code: string;
  name: string;
  symbol: string;
}
