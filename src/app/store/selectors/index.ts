import { createSelector } from '@ngrx/store';

import * as fromAppSelectors from './app.selectors';
import { AppState } from '../interface/state.interface';

export const selectAppState = (state: AppState) => state.state;

export const selectFirstNumber = createSelector(
  selectAppState,
  fromAppSelectors.selectFirstNumber
);

export const selectSecondNumber = createSelector(
  selectAppState,
  fromAppSelectors.selectSecondNumber
);
