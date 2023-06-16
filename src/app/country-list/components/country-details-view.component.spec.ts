import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailsViewComponent } from './country-details-view.component';
import { CurrencyDetail } from '../state/country-list.model';

describe('CountryDetailsViewComponent', () => {
  let component: CountryDetailsViewComponent;
  let fixture: ComponentFixture<CountryDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryDetailsViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CountryDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return comma separated currencies', () => {
    const currencies: CurrencyDetail[] = [
      { code: 'INR', name: 'Indian rupee', symbol: '₹' },
      { code: 'BTN', name: 'Bhutanese ngultrum', symbol: 'Nu.' },
    ];
    const expected = 'INR,BTN';
    const actual = component.currencyDisplay(currencies);
    expect(expected).toEqual(actual);
  });
});
