package deckofcards.test.services;

import deckofcards.test.entities.Deck;
import lombok.extern.slf4j.Slf4j;
import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * Project : test
 *
 * @author Julien Le Fur (contact julien.lf@free.fr)
 * <p>
 * Created: 29 septembre 2019
 */
@Slf4j
@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
@SpringBootTest()
public class DeckMakerServiceImplTest {

    @Autowired
    private DeckMakerService service;

    public DeckMakerServiceImplTest() {
    }

    @Test
    public void shouldReturnDeckObject() {
        Deck deck = service.makeFullDeckOfCards();
        Assertions.assertThat(deck).isInstanceOf(Deck.class);
        Assertions.assertThat(deck.getCards().size()).isEqualTo(52);
    }
}