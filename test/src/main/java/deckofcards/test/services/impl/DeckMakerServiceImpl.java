package deckofcards.test.services.impl;

import deckofcards.test.entities.Card;
import deckofcards.test.entities.Deck;
import deckofcards.test.enums.Colours;
import deckofcards.test.enums.Values;
import deckofcards.test.services.DeckMakerService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.EnumSet;
import java.util.List;

/**
 * @Author Julien Le Fur
 * Created 28 septembre 2019
 * @package services.impl
 */

@Slf4j
@Service
public class DeckMakerServiceImpl implements DeckMakerService {

    public Deck makeFullDeckOfCards() {
        Deck deck = new Deck();
        List<Card> cards = new ArrayList<>();
        for (Colours col : Colours.values()) {
            for (Values val: Values.values()) {
                cards.add(new Card(col, val.getValue()));
            }
        }
        deck.setCards(cards);
        return deck;
    }
}
