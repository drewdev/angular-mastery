import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from '../input-text/input-text.component';

@Component({
  standalone: true,
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, InputTextComponent] 
})
export class LoginFormComponent {
  form: FormGroup;
  // ✅ We create a signal wich represent the current value of the form
  formValue = signal<{ email: string; password: string }>({ email: '', password: '' });
  isValid = signal(false);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.form.valueChanges.subscribe(value => {
      this.formValue.set(value);
      this.isValid.set(this.form.valid);
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('✅ Login with', this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
