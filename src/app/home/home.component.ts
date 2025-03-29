import { Component, signal } from '@angular/core';
import { UserCardComponent } from '../shared/user-card/user-card.component';
import { LoginFormComponent } from '../shared/login-form/login-form.component';
import { CounterComponent } from '../shared/counter/counter.component';
import { UserInputComponent } from '../shared/user-input/user-input.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserCardComponent, LoginFormComponent, CounterComponent, UserInputComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  userName = 'Pedro';
  greeting = signal<string | null>(null);

  handleGreeting(message: string) {
    this.greeting.set(message);
  }
}
