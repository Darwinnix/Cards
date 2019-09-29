package deckofcards.test.entities;

import deckofcards.test.enums.Colours;
import deckofcards.test.enums.Values;

/**
 * @Author Julien Le Fur
 * Created 28 septembre 2019
 * @package deckofcards.test.entities
 */


public class Card {

    private Colours color;
    private int value;

    public Card() {
    }

    public Card(Colours color, int value) {
        this.color = color;
        this.value = value;
    }

    public Colours getColor() {
        return color;
    }

    public void setColor(Colours color) {
        this.color = color;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }
}
