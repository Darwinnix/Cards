import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckOfCardsComponent } from './deck-of-cards.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {DeckOfCardsService} from "../service/deck-of-cards.service";
import {CardDisplayComponent} from "../card-display/card-display.component";
import {HttpClientModule} from "@angular/common/http";
import {of} from "rxjs";

describe('DeckOfCardsComponent', () => {
  let component: DeckOfCardsComponent;
  let fixture: ComponentFixture<DeckOfCardsComponent>;
  const deckOfCardsServiceStub = {
    getFullDeck() {
      const fakeDeck = {
        cards: [
          {
            color: "HEART",
            value: 1,
          },
          {
            color: "SPADE",
            value: 11
          }
        ]};
      return of(fakeDeck);
    }
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckOfCardsComponent, CardDisplayComponent ],
      imports: [
        MatGridListModule,
        HttpClientModule
      ],
      providers: [{provide: DeckOfCardsService, useValue: deckOfCardsServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckOfCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit function cal getFullDeck function', function () {
    component.ngOnInit();
    expect(component.deck).toBeDefined();
    expect(component.deck.length).toEqual(2);
  });

  it('should trigger onResize function when window is resized', function () {
    const spyOnResize = spyOn(component, 'onResize');
    window.dispatchEvent(new Event('resize'));
    expect(spyOnResize).toHaveBeenCalled();
  });
});
