import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDropdownComponent } from './components/custom-dropdown.component';

@NgModule({
  declarations: [CustomDropdownComponent],
  imports: [CommonModule],
  exports: [CustomDropdownComponent],
})
export class SharedModule {}
