import {Component, OnDestroy, OnInit} from '@angular/core';
import {DeckOfCardsService} from "../service/deck-of-cards.service";
import {CardModel} from "../../../shared/models/card.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-deck-of-cards',
  templateUrl: './deck-of-cards.component.html',
  styleUrls: ['./deck-of-cards.component.scss']
})
export class DeckOfCardsComponent implements OnInit, OnDestroy {

  deck: CardModel[] = [];
  sub: Subscription;

  constructor(
    private _deckOfCardService: DeckOfCardsService
  ) { }

  ngOnInit() {
    this.getFullDeck()
  }

  getFullDeck() {
    this.sub = this._deckOfCardService.getFullDeck().subscribe((res: any) => {
      this.deck = res.cards;
      console.log(res);
    })
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }


}
