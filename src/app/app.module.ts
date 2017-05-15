import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { operationsReducer } from './common/operation/operations';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ operations: operationsReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
