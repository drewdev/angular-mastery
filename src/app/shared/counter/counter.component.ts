import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  imports: [CommonModule]
})
export class CounterComponent {
  // 📌 Signal wich represents a counter
  count = signal(0);

  // 📌 Computed signal (like a reactive getter)
  doubleCount = computed(() => this.count() * 2);

  // 📌 Effect: executed whenever 'count' changes
  logEffect = effect(() => {
    console.log('🔁 count has been updated to:', this.count());
  });

  increment() {
    this.count.update(value => value + 1);
  }

  decrement() {
    this.count.update(value => value - 1);
  }

  reset() {
    this.count.set(0);
  }
}
