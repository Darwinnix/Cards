package deckofcards.test.entities;

import java.util.List;

/**
 * @Author Julien Le Fur
 * Created 26 septembre 2019
 * @package deckofcards.test.entities
 */
public class Deck {

    private List<Card> cards;

    public Deck() {
    }

    public Deck(List<Card> cards) {
        this.cards = cards;
    }

    public List<Card> getCards() {
        return cards;
    }

    public void setCards(List<Card> cards) {
        this.cards = cards;
    }
}
