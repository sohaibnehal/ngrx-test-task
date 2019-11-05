import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// containers
import * as fromLayouts from './layouts';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer, effects } from './store';

@NgModule({
  declarations: [AppComponent, ...fromLayouts.layouts],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot(effects),
    StoreModule.forRoot({ state: reducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
