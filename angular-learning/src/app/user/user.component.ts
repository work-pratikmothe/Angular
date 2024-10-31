import {
  Component,
  computed,
  EventEmitter,
  input,
  InputSignal,
  output,
  Output,
  signal,
} from '@angular/core';
import { DUMMY_USERS } from '../../assets/dummy-users';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent, CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user = input.required<User>();
  selected = input.required<Boolean>();
  avatar = computed(() => {
    return this.user().avatar;
  });
  id = computed(() => {
    return this.user().id;
  });
  name = computed(() => {
    return this.user().name;
  });
  select = output<string | any>();

  // @Output() select = new EventEmitter();

  imagePath = computed(() => {
    return '../../../assets/users/' + this.avatar();
  });

  onSelectedUser() {
    this.select.emit(this.id());
  }
}
