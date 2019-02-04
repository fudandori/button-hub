import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonData } from './button-data';
import { widen } from './animations';

@Component({
  selector: 'app-button-hub',
  templateUrl: './button-hub.component.html',
  styleUrls: ['./button-hub.component.css'],
  animations: [widen]
})
export class ButtonHubComponent {

  @Input() buttons = Array<ButtonData>();
  @Input() animationTime = 200;

  @Output() pushed = new EventEmitter<string>();

  buttonWidth: string;

  hover(hovering: boolean, index: number) {
    clearTimeout(this.buttons[index].timer);
    this.buttons[index].hovering = hovering;
    if (hovering) {
      this.buttonWidth = (42 + this.buttons[index].label.length * 9).toString();
      this.buttons[index].showIcon = false;
      this.buttons[index].timer = setTimeout(() => this.buttons[index].showText = true, 200);

    } else {
      this.buttons[index].showText = false;
      this.buttons[index].timer = setTimeout(() => this.buttons[index].showIcon = true, 200);
    }
  }

  onClick(id: string) {
    this.pushed.emit(id);
  }
}
