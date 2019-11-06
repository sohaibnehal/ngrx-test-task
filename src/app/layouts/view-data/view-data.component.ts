import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.scss']
})
export class ViewDataComponent {
  @Input() firstNumber: number;
  @Input() secondNumber: number;

  constructor() {}
}
