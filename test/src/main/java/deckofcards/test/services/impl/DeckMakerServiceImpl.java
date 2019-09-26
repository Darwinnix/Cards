package deckofcards.test.services.impl;

import deckofcards.test.entities.Card;
import deckofcards.test.entities.Deck;
import deckofcards.test.enums.Colours;
import deckofcards.test.enums.Values;
import deckofcards.test.services.DeckMakerService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

/**
 * @Author Julien Le Fur
 * Created 26 septembre 2019
 * @package services.impl
 */

@Slf4j
@Service
public class DeckMakerServiceImpl implements DeckMakerService {

    public Deck makeFullDeckOfCards() {
        Deck deck = new Deck();
        for (Colours col : Colours.values()) {
            for (Values val: Values.values()) {
                Card card = new Card(col, val);
                deck.getCards().add(card);
            }
        }
        return deck;
    }
}
