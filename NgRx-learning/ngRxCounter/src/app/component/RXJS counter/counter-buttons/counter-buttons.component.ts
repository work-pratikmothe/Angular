import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  imports: [],
  templateUrl: './counter-buttons.component.html',
  styleUrl: './counter-buttons.component.css',
})
export class CounterButtonsComponent {
  handleReset() {
    this.onReset.emit();
  }
  handleDecrement() {
    this.onDecrement.emit();
  }
  handleIncrement() {
    this.onIncrement.emit();
  }
  @Output() onIncrement = new EventEmitter();
  @Output() onDecrement = new EventEmitter();
  @Output() onReset = new EventEmitter();
}
