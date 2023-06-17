import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CountryListService } from './country-list.service';
import { HttpClient } from '@angular/common/http';
import { CountryDetail } from '../state/country-list.model';
import { of } from 'rxjs';

describe('CountryListService', () => {
  let service: CountryListService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CountryListService,
        {
          provide: HttpClient,
          useValue: httpClientSpy,
        },
      ],
    });
    service = TestBed.inject(CountryListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected countries (HttpClient called once)', (done: DoneFn) => {
    const expectedCountries: CountryDetail[] = [
      {
        name: 'India',
        capital: 'Delhi',
        currencies: [{ code: 'INR', name: 'Indian rupee', symbol: '₹' }],
        flag: 'test.svg',
        population: 100,
      },
    ];
    httpClientSpy.get.and.returnValue(of(expectedCountries));
    service.getCountries('Asia').subscribe({
      next: (countries) => {
        expect(countries)
          .withContext('expected countries')
          .toEqual(expectedCountries);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });
});
