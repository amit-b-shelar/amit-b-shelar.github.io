import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { CountryListState } from '../state/country-list.model';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import { CountryListActions } from '../state/country-list.actions';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: MockStore<CountryListState>;
  const initialState: CountryListState = {
    regions: ['Asia'],
    currentRegion: '',
    countries: [],
    currentCountry: '',
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [provideMockStore({ initialState })],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch setCurrentCountry on store', () => {
    spyOn(store, 'dispatch');
    component.OnSelectedCountryChanged('India');
    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(
      CountryListActions.setCurrentCountry({ country: 'India' })
    );
  });

  it('should dispatch setCurrentRegion on store', () => {
    spyOn(store, 'dispatch');
    component.OnSelectedRegionChanged('Asia');
    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(
      CountryListActions.setCurrentRegion({ region: 'Asia' })
    );
  });
});
