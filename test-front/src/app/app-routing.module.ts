import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeckOfCardsModule} from "./components/deckOfCards/deck-of-cards.module";

const routes: Routes = [
  {
    path: 'deckofcards',
    loadChildren: () => DeckOfCardsModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
