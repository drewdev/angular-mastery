import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() username = '';
  @Output() greet = new EventEmitter<string>();

  onClick() {
    this.greet.emit(`¡Hello ${this.username}!`);
  }
}
