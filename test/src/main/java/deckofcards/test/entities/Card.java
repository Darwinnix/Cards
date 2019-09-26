package deckofcards.test.entities;

import deckofcards.test.enums.Colours;
import deckofcards.test.enums.Values;

/**
 * @Author Julien Le Fur
 * Created 26 septembre 2019
 * @package deckofcards.test.entities
 */


public class Card {

    Colours color;
    Values value;

    public Card() {
    }

    public Card(Colours color, Values value) {
        this.color = color;
        this.value = value;
    }

    public Colours getColor() {
        return color;
    }

    public void setColor(Colours color) {
        this.color = color;
    }

    public Values getValue() {
        return value;
    }

    public void setValue(Values value) {
        this.value = value;
    }
}
