package deckofcards.test.controllers;

import deckofcards.test.entities.Deck;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Copyright (C) ACENSI, INC - All Right Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * @Author Julien Le Fur (julien.lefur@acensi.fr)
 * Created 26 septembre 2019
 * @package deckofcards.test.Controllers
 */

@RequestMapping("/deck")
public interface DeckMakerController {
    @GetMapping("/all")
    ResponseEntity<Deck> makeFullDeckOfCards ();
}
