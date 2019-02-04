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
    .setId('button1')
    .setIcon('download')
    .setLabel('For Adun');

    this.buttons.push(button);

    button = new ButtonData();
    button
    .setId('button2')
    .setIcon('home')
    .setLabel('My life for Aiur');

    this.buttons.push(button);

    button = new ButtonData();
    button
    .setId('button3')
    .setIcon('radar')
    .setLabel('Warpfields stabilized');

    this.buttons.push(button);

    button = new ButtonData();
    button
    .setId('button3')
    .setIcon('unknown-status')
    .setLabel('I wonder what this button does');

    this.buttons.push(button);
  }

  onPush(id: string) {

  }
}
