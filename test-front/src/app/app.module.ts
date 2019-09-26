import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeckOfCardsComponent } from './components/deckOfCards/deck-of-cards/deck-of-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    DeckOfCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
