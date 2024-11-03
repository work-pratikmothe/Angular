import { Component, computed, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  ticket = input.required<any>();

  detailsVisible = signal(false);
  ticketStatus = computed(() => {
    return this.ticket().isCompleted === 'closed' ? true : false;
  });

  handleStatus = output();

  onToggleDetails() {
    this.detailsVisible.update((preValue) => !preValue);
  }
  handleMarkAsCompleted() {
    this.handleStatus.emit(this.ticket().id);
  }
}
