import { createAction } from '@ngrx/store';

const INCREASE = '[App] Increase';
const DECREASE = '[App] Decrease';
const CHANGE = '[App] Change';
const RESET = '[App] Reset';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const change = createAction(CHANGE);
export const reset = createAction(RESET);
