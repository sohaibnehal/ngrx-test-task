import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';

import * as appActions from '../actions';
import { AppState } from '../interface/state.interface';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private store$: Store<AppState>) {}

  change$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.change),
      switchMap(_ => [
        appActions.increase(),
        appActions.decrease(),
        appActions.decrease()
      ])
    )
  );
}
