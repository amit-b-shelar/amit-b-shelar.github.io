import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CountryListService } from './country-list.service';

describe('CountryListService', () => {
  let service: CountryListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CountryListService],
    });
    service = TestBed.inject(CountryListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
