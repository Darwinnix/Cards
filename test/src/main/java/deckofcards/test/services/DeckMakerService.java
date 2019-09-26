package deckofcards.test.services;

import deckofcards.test.entities.Card;
import deckofcards.test.entities.Deck;
import deckofcards.test.enums.Colours;
import deckofcards.test.enums.Values;

/**
 * @Author Julien Le Fur
 * Created 26 septembre 2019
 * @package services
 */

public interface DeckMakerService {

    Deck makeFullDeckOfCards();
}
