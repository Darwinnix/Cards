import {fakeAsync, TestBed} from '@angular/core/testing';

import { DeckOfCardsService } from './deck-of-cards.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpClientModule} from "@angular/common/http";
import {MatGridListModule} from "@angular/material/grid-list";
import {DeckOfCardsComponent} from "../deck-of-cards/deck-of-cards.component";
import {CardDisplayComponent} from "../card-display/card-display.component";

describe('DeckOfCardsService', () => {

  let httpTestingController : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
     declarations: [DeckOfCardsComponent, CardDisplayComponent],
     imports: [
       HttpClientTestingModule,
       HttpClientModule,
       MatGridListModule
     ],
     providers: [DeckOfCardsService]
    })
    .compileComponents();
  });
  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
  });


  it('should be created', () => {
    expect(TestBed.get(DeckOfCardsService)).toBeTruthy();
  });

  it('should use HttpClient.get', fakeAsync(() => {
    TestBed.get(DeckOfCardsService).getFullDeck().subscribe((res: any) => {
      expect(res).toBeDefined();
      expect(res.cards.length).toEqual(52);
    });
    const req = httpTestingController.expectOne('http://localhost:8080/deck/all');
    expect(req.request.method).toBe('GET');

  }));

});
