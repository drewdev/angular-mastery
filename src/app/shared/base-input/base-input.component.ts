import { Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-base-input',
  standalone: true,
  imports: [],
  templateUrl: './base-input.component.html',
  styleUrl: './base-input.component.scss',
})
export abstract class BaseInputComponent implements ControlValueAccessor {
  @Input() inputType: 'text' | 'password' = 'text';
  @Input() label = '';
  @Input() placeholder = '';
  @Input() showToggle: boolean | undefined = false;
  @Input() error: boolean | undefined = false;
  value = '';
  isDisabled = false;
  isVisible = false;

  onChange = (value: string) => {};
  onTouched = () => {};

  get inputTypeValue(): string {
    if (this.inputType === 'password' && this.showToggle) {
      return this.isVisible ? 'text' : 'password';
    }
    return this.inputType;
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  updateValue(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
  }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
