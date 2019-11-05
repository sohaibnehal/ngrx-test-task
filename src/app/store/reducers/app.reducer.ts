import { Action, createReducer, on } from '@ngrx/store';
import * as AppActions from '../actions/app.actions';

import { IAppState } from '../interface/state.interface';
import { initialState } from './initial-state';

const appReducer = createReducer(
  initialState,
  on(AppActions.increase, state => ({
    // This actions increases the first variable by 1
    ...state,
    firstNumber: state.firstNumber + 1
  })),
  on(AppActions.decrease, state => ({
    // This actions decreases the second variable by 1
    ...state,
    secondNumber: state.secondNumber - 1
  })),
  on(AppActions.reset, state => ({
    // This actions resets the state to its initial state
    ...initialState
  }))
);

export function reducer(state: IAppState | undefined, action: Action) {
  return appReducer(state, action);
}
