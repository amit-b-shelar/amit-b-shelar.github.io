import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CountryDetail, CurrencyDetail } from '../state/country-list.model';

@Component({
  selector: 'app-country-details-view',
  templateUrl: './country-details-view.component.html',
  styleUrls: ['./country-details-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryDetailsViewComponent {
  @Input()
  countryDetails: CountryDetail | null = null;

  currencyDisplay = (currencies: CurrencyDetail[]): string =>
    currencies.map((c) => c.code).join();
}
