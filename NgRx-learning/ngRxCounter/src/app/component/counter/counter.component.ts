import { Component } from '@angular/core';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';

@Component({
  selector: 'app-counter',
  imports: [CounterOutputComponent, CounterButtonsComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  counter: number = 0;

  onIncrementCounter() {
    this.counter = this.counter + 1;
  }

  onDecrementCounter() {
    this.counter = this.counter - 1;
  }

  onReset() {
    this.counter = 0;
  }
}
