import { Component, input, output } from '@angular/core';
import { Task } from './user.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<Task>();
  onCompleteTask$ = output<string>();

  onCompleteTask() {
    this.onCompleteTask$.emit(this.task().id);
  }
}
