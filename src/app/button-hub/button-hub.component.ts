import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonData } from './button-data';
import { grow } from './animations';

@Component({
  selector: 'app-button-hub',
  templateUrl: './button-hub.component.html',
  styleUrls: ['./button-hub.component.css'],
  animations: [grow]
})
export class ButtonHubComponent {

  @Input() buttons = Array<ButtonData>();
  @Output() pushed = new EventEmitter<string>();

  timer;

  hover(state: boolean, index: number) {
    clearTimeout(this.buttons[index].timer);
    this.buttons[index].hovering = state;
    if (state) {
      this.buttons[index].showIcon = false;
      this.buttons[index].timer = setTimeout(() => this.buttons[index].showText = true, 200);
    } else {
      this.buttons[index].showText = false;
      this.buttons[index].timer = setTimeout(() => this.buttons[index].showIcon = true, 200);
    }
  }

}
