import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {DeckOfCardsModule} from "./components/deckOfCards/deck-of-cards.module";

const routes: Routes = [

  {
    path: 'deckofcards',
    loadChildren: () => DeckOfCardsModule
  },
  {
    path: '',
    redirectTo: 'deckofcards',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
