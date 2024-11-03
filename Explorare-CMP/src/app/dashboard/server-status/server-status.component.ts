import {
  Component,
  DestroyRef,
  inject,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnChanges {
  currentStatus = 'online';

  destroyRef = inject(DestroyRef);

  constructor() {
    console.log('construcot');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChange');
  }
  ngOnChange() {}
  ngOnInit() {
    console.log('ngOnInit');
    const interval = setInterval(() => {
      const random = Math.random();
      if (random < 0.5) {
        this.currentStatus = 'offline';
      } else if (random < 0.9) {
        this.currentStatus = 'online';
      } else {
        this.currentStatus = 'unknow';
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }
}
