import { Component, computed, input, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../../assets/dummy-task';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './new-task/new-task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks = signal(dummyTasks);
  selectedUser = input<any>();
  name = computed(() => this.selectedUser().name + "'s Tasks");
  selectedUserId = computed(() => {
    return this.selectedUser().id;
  });
  selectedUserTasks = computed(() => {
    return this.tasks().filter((task) => {
      return task.userId === this.selectedUser().id;
    });
  });

  showAddTask: boolean = false;

  onCompleteTask(id: string) {
    this.tasks.set(this.tasks().filter((task) => task.id !== id));
  }
  onAddTask() {
    this.showAddTask = true;
  }
  onCancelAddTask() {
    this.showAddTask = false;
  }

  addTask(task: NewTask) {
    let newTask = {
      ...task,
      id: new Date().getTime().toString(),
      userId: this.selectedUserId(),
    };
    let tasks = [...this.tasks(), newTask];
    this.tasks.set(tasks);
    this.showAddTask = false;
  }
}
