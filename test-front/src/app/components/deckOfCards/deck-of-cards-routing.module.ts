import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeckOfCardsComponent} from "./deck-of-cards/deck-of-cards.component";

const routes: Routes = [
  {
    path: '',
    component: DeckOfCardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeckOfCardsRoutingModule { }
