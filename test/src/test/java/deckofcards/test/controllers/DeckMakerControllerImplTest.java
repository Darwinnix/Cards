package deckofcards.test.controllers;

import deckofcards.test.entities.Card;
import deckofcards.test.entities.Deck;
import deckofcards.test.enums.Colours;
import deckofcards.test.enums.Values;
import deckofcards.test.services.DeckMakerService;
import lombok.extern.slf4j.Slf4j;
import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.collection.IsCollectionWithSize.hasSize;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * Project : test
 *
 * @author Julien Le Fur (contact julien.lf@free.fr)
 * <p>
 * Created: 28 septembre 2019
 */
@Slf4j
@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class DeckMakerControllerImplTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private DeckMakerService deckMakerService;

    @Test
    public void shouldReturnJsonOject() {
        Card first = new Card(Colours.CLUB, Values.ACE.getValue());
        Card second = new Card(Colours.HEART, Values.KING.getValue());
        List<Card> list = new ArrayList<>();
        list.add(first);
        list.add(second);
        when(deckMakerService.makeFullDeckOfCards()).thenReturn(new Deck(list));
        try {
            this.mockMvc.perform(get("/deck/all").contentType("application/json"))
                    .andExpect(status().isCreated())
                    .andExpect(MockMvcResultMatchers.jsonPath("$.cards").isArray())
                    .andExpect(MockMvcResultMatchers.jsonPath("$.cards", hasSize(2)));

        } catch (Exception ex) {
            ex.printStackTrace();
            log.error(ex.getMessage());
        }

    }

    @Test
    public void shouldServiceNotNull() {
        try {
            Assertions.assertThat(deckMakerService).isNotNull();
        } catch (Exception ex) {
            ex.printStackTrace();
            log.error(ex.getMessage());
        }
    }


}
