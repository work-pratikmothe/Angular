import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './component/counter/counter.component';
import { CounterRxComponent } from './component/RXJS counter/counter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, CounterRxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ngRxCounter';
}
