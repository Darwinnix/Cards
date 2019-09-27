import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeckOfCardsRoutingModule } from './deck-of-cards-routing.module';
import { CardDisplayComponent } from './card-display/card-display.component';
import {DeckOfCardsComponent} from "./deck-of-cards/deck-of-cards.component";
import {SharedModule} from "../../shared/shared.module";
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [
    CardDisplayComponent,
    DeckOfCardsComponent
  ],
  imports: [
    CommonModule,
    DeckOfCardsRoutingModule,
    SharedModule,
    MatCardModule,
    HttpClientModule,
    MatGridListModule
  ],
  exports: []
})
export class DeckOfCardsModule { }
