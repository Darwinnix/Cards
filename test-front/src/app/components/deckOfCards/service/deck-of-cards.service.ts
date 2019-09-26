import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DeckOfCardsService {

  readonly allCardUrl = environment.host + environment.deck + environment.all;

  constructor(private _http: HttpClient) { }

  getFullDeck() {
    return this._http.get(this.allCardUrl);
  }

}
