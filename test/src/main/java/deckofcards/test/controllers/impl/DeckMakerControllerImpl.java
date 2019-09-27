package deckofcards.test.controllers.impl;

import deckofcards.test.controllers.DeckMakerController;
import deckofcards.test.entities.Deck;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import deckofcards.test.services.DeckMakerService;

/**
 * Copyright (C) ACENSI, INC - All Right Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * @Author Julien Le Fur (julien.lefur@acensi.fr)
 * Created 26 septembre 2019
 * @package deckofcards.test.Controllers.impl
 */
@CrossOrigin
@RestController
public class DeckMakerControllerImpl implements DeckMakerController {

    private DeckMakerService deckMakerService;

    public DeckMakerControllerImpl(DeckMakerService deckMakerService) {
        this.deckMakerService = deckMakerService;
    }

    @Override
    public ResponseEntity<Deck> makeFullDeckOfCards() {
        Deck deck = deckMakerService.makeFullDeckOfCards();
        return new ResponseEntity<>(deck, HttpStatus.CREATED);
    }
}
