import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import * as fromStore from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstNumber$: Observable<number>;
  secondNumber$: Observable<number>;

  intervalDuration: number; // in ms. for timer to trigger change action
  intervalTimer: any; // interval object

  constructor(private store: Store<fromStore.AppState>) {
    this.firstNumber$ = store.pipe(select(fromStore.selectFirstNumber));
    this.secondNumber$ = store.pipe(select(fromStore.selectSecondNumber));

    this.intervalDuration = 1000;
  }

  /**
   * This function starts the timer to dispatch
   * change action every second
   */
  startHandler() {
    this.intervalTimer = setInterval(() => {
      this.store.dispatch(fromStore.change());
    }, this.intervalDuration);
  }

  /**
   * This function clears the timer and
   * also resets the state to its initial state.
   */
  stopHandler() {
    this.store.dispatch(fromStore.reset());
    clearInterval(this.intervalTimer);
  }

  /** This function resets the state to its initial state. */
  resetHandler() {
    this.store.dispatch(fromStore.reset());
  }
}
