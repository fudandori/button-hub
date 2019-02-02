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
    if (state) {
      if (this.buttons[index].label.length < 8) {
        this.buttons[index].hovering = 'st';
      } else if (this.buttons[index].label.length >= 8 && this.buttons[index].label.length < 10) {
        this.buttons[index].hovering = 'xs';
      } else if (this.buttons[index].label.length >= 10 && this.buttons[index].label.length < 12) {
        this.buttons[index].hovering = 'sm';
      } else if (this.buttons[index].label.length >= 12 && this.buttons[index].label.length < 14) {
        this.buttons[index].hovering = 'md';
      } else if (this.buttons[index].label.length >= 14 && this.buttons[index].label.length < 16) {
        this.buttons[index].hovering = 'lg';
      } else {
        this.buttons[index].hovering = 'xl';
      }
      this.buttons[index].showIcon = false;
      this.buttons[index].timer = setTimeout(() => this.buttons[index].showText = true, 200);
    } else {
      this.buttons[index].hovering = 'icon';
      this.buttons[index].showText = false;
      this.buttons[index].timer = setTimeout(() => this.buttons[index].showIcon = true, 200);
    }
  }
}
