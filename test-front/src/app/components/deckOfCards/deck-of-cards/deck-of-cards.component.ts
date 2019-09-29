import {Component, OnDestroy, OnInit} from '@angular/core';
import {DeckOfCardsService} from "../service/deck-of-cards.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-deck-of-cards',
  templateUrl: './deck-of-cards.component.html',
  styleUrls: ['./deck-of-cards.component.scss']
})
export class DeckOfCardsComponent implements OnInit, OnDestroy {

  deck: any;
  sub: Subscription;
  breakpoint;

  constructor(
    private _deckOfCardService: DeckOfCardsService
  ) { }

  ngOnInit() {
    this.getFullDeck();
    this.breakpoint = Math.floor(window.innerWidth / 200);
  }

  getFullDeck() {
    this.sub = this._deckOfCardService.getFullDeck().subscribe((res: any) => {
      this.deck = res.cards;
      console.log(res);
    })
  }

  onResize(event) {
    const element = event.target.innerWidth;
    this.breakpoint = Math.floor(element / 200);
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }


}
