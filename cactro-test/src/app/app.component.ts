import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CardComponent } from './component/card/card.component';
import { MessageBarComponent } from './component/message-bar/message-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, CardComponent, MessageBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cactro-test';

  leftCount = 0;
  rightCount = 0;
  topCount = 0;
  visitedCount = 0;

  handleClick(position: string) {
    switch (position) {
      case 'left': {
        this.leftCount = this.leftCount + 1;
        return;
      }
      case 'right': {
        this.rightCount = this.rightCount + 1;
        return;
      }
      case 'top': {
        this.topCount = this.topCount + 1;
        return;
      }
      case 'visited': {
        this.visitedCount = this.visitedCount + 1;
        return;
      }
    }
  }
}
