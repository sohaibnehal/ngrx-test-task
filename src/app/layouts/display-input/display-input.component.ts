import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-input',
  templateUrl: './display-input.component.html',
  styleUrls: ['./display-input.component.scss']
})
export class DisplayInputComponent {
  @Input() inputValue: number;

  constructor() {}
}
