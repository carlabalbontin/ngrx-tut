import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { tutorialReducer } from './reducers/tutorial.reducer';
import { ReadComponent } from './read/read.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      tutorial: tutorialReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
