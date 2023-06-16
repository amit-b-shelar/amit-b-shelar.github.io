import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { CountryListStateKey } from './state/country-list.model';
import { countryListReducer } from './state/country-list.reducer';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home.component';
import { CountryListService } from './services/country-list.service';
import { EffectsModule } from '@ngrx/effects';
import { CountryListEffects } from './state/country-list.effects';
import { CountryDetailsViewComponent } from './components/country-details-view.component';

@NgModule({
  declarations: [HomeComponent, CountryDetailsViewComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(CountryListStateKey, countryListReducer),
    EffectsModule.forFeature([CountryListEffects]),
    SharedModule,
  ],
  providers: [CountryListService],
  exports: [HomeComponent],
})
export class CountryListModule {}
