import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: any[] = [];
  submitForm($event: { title: string; request: string }) {
    this.tickets.push({
      ...$event,
      id: new Date().getTime(),
      isCompleted: 'open',
    });

    console.log(this.tickets);
  }

  handleStatus(id: string | any) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id) {
        return { ...ticket, isCompleted: 'closed' };
      }
      return ticket;
    });
  }
}
