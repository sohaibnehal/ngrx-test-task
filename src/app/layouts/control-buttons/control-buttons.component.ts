import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control-buttons',
  templateUrl: './control-buttons.component.html',
  styleUrls: ['./control-buttons.component.scss']
})
export class ControlButtonsComponent {
  @Output() startHandler = new EventEmitter<any>();
  @Output() stopHandler = new EventEmitter<any>();
  @Output() resetHandler = new EventEmitter<any>();

  constructor() {}

  onStart() {
    this.startHandler.emit();
  }

  onStop() {
    this.stopHandler.emit();
  }

  onReset() {
    this.resetHandler.emit();
  }
}
