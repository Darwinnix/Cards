package deckofcards.test.controllers;

import deckofcards.test.entities.Deck;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @Author Julien Le Fur
 * Created 28 septembre 2019
 * @package deckofcards.test.Controllers
 */

@RequestMapping("/deck")
public interface DeckMakerController {
    @GetMapping("/all")
    ResponseEntity<Deck> makeFullDeckOfCards ();
}
