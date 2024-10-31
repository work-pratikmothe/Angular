import { signal } from '@angular/core';
import { dummyTasks } from '../../assets/dummy-task';

class TasksService {
  private tasks = signal(dummyTasks);
}
