import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-errors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-errors.component.html',
  styleUrl: './form-errors.component.scss'
})
export class FormErrorsComponent {
  @Input() control!: AbstractControl | null;

  errorMessages: Record<string, (error: any) => string> = {
    required: () => 'Este campo es obligatorio.',
    email: () => 'El formato del email no es válido.',
    minlength: (error) => `Mínimo ${error.requiredLength} caracteres.`,
    maxlength: (error) => `Máximo ${error.requiredLength} caracteres.`,
    pattern: () => 'El formato ingresado no es válido.'
  };

  get firstError(): string | null {
    if (!this.control || !this.control.errors || !this.control.touched) return null;

    const errors: ValidationErrors = this.control.errors;
    const firstKey = Object.keys(errors)[0];
    const errorFn = this.errorMessages[firstKey];

    return errorFn ? errorFn(errors[firstKey]) : 'Campo inválido.';
  }
}
