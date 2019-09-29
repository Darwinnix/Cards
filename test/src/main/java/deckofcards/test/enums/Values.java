package deckofcards.test.enums;

/**
 * @Author Julien Le Fur
 * Created 28 septembre 2019
 * @package deckofcards.test.enums
 */
public enum Values {
    ACE(1),
    TWO(2),
    THREE(3),
    FOUR(4),
    FIVE(5),
    SIX(6),
    SEVEN(7),
    HEIGHT(8),
    NINE(9),
    TEN(10),
    JACK(11),
    QUEEN(12),
    KING(13);

    private final int value;

    Values(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}
