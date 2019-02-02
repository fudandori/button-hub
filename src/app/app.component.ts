import { Component } from '@angular/core';
import { ButtonData } from './button-hub/button-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'laboratory';
  buttons = new Array<ButtonData>();
  timer: any;

  constructor() {
    let button = new ButtonData();
    button
    .setIcon('download')
    .setLabel('For Aiur!');

    this.buttons.push(button);

    button = new ButtonData();
    button
    .setIcon('home')
    .setLabel('Adun');

    this.buttons.push(button);

    button = new ButtonData();
    button
    .setIcon('unknown-status')
    .setLabel('Nerazim');

    this.buttons.push(button);
  }
}
