import { Component, output, signal, ViewChild, viewChild } from '@angular/core';
import { ControlComponent } from '../../../shared/control/control.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  @ViewChild('form') form: any;
  title = signal<string>('');
  request = signal<string>('');

  submitForm = output<{ title: string; request: string }>();

  submit() {
    this.submitForm.emit({ title: this.title(), request: this.request() });
    this.form.nativeElement.reset();
  }
}
