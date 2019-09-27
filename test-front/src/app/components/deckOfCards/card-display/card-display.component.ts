import {Component, Input, OnInit} from '@angular/core';
import {DeckOfCardsService} from "../service/deck-of-cards.service";

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.scss']
})
export class CardDisplayComponent implements OnInit {

  @Input() value: any;
  @Input() color: string;

  constructor() { }

  ngOnInit() {
    if (this.value === 1) {
      this.value = 'A';
    }
    if (this.value === 11) {
      this.value = 'J';
    }
    if (this.value === 12) {
      this.value = 'Q';
    }
    if (this.value === 13) {
      this.value = 'K';
    }
  }

}
