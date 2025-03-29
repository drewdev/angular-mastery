import { Component, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
  imports: [CommonModule]
})
export class UserInputComponent {
  name = signal('Pedro');
  nameLength = computed(() => this.name().length);

  constructor() {
    effect(() => {
      console.log('New name:', this.name());
    });
  }

  updateName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.name.set(input.value);
  }

}
