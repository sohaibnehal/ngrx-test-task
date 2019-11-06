import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-input',
  templateUrl: './display-input.component.html',
  styleUrls: ['./display-input.component.scss']
})
export class DisplayInputComponent {
  @Input() inputValue: number;

  constructor() {}

  // This function calculates the styling of the div
  styleMe(value: number) {
    if (this.inputValue < 0) {
      value = Math.abs(value);
      return `${value}px solid red`;
    } else {
      return `${value}px solid blue`;
    }
  }
}
