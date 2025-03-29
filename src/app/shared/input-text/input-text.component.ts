import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseInputComponent } from '../base-input/base-input.component';

@Component({
  standalone: true,
  selector: 'app-input-text',
  templateUrl: './../base-input/base-input.component.html',
  styleUrls: ['./input-text.component.scss'],
  imports: [CommonModule, FormsModule],
   providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true
    }
  ]
})
export class InputTextComponent extends BaseInputComponent {
}
