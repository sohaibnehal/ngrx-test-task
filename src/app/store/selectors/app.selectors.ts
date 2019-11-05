import { IAppState } from '../interface/state.interface';

// Selector Methods
export const selectFirstNumber = (state: IAppState) => state.firstNumber;
export const selectSecondNumber = (state: IAppState) => state.secondNumber;
