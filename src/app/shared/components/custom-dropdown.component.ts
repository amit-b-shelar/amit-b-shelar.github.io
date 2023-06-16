import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomDropdownComponent {
  @Input()
  label: string = '';
  @Input()
  items: string[] | null = [];
  @Input()
  value: string | null = '';
  @Input()
  disabled: boolean = false;
  @Output()
  onSelectedItemChanged: EventEmitter<string> = new EventEmitter();

  selectedItemChanged(e: any) {
    this.onSelectedItemChanged.emit(e.target.value);
  }
}
