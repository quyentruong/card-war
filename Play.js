import Deck from './Deck.js';
import Card from './Card.js';

export default function war(deck, players) {
    const d = new Deck(deck);
    let missingCard = false;
    while (d.count() > 0) {
        // deal cards to players
        for (let i = 0; i < players.length; i++) {
            let card = d.deal();
            if (card !== null) {
                players[i].Deck.push(card);
            } else {
                missingCard = true;
                break;
            }
        }
        if (!missingCard) {
            // compare cards and determine winner
            let winner = players[0];

            for (let i = 1; i < players.length; i++) {
                let cardA = new Card(winner.Deck[0]);
                let cardB = new Card(players[i].Deck[0]);
                if (cardA.compare(cardB) === -1) {
                    winner = players[i];

                }
            }
            // discard cards and add to discard pile of winner
            for (let i = 0; i < players.length; i++) {
                winner.Discard.push(players[i].Deck.shift());
            }

        }

    }

    // sort discard pile from highest to lowest
    players.sort((a, b) => {
        return b.Discard.length - a.Discard.length;
    });

    // looking for other winner if there is a tie
    const winner = players[0];
    const winners = [];
    winners.push(winner);
    for (let i = 1; i < players.length; i++) {
        if (winner.Discard.length === players[i].Discard.length) {
            winners.push(players[i]);
        }
    }
    // print array of winners if there is a tie
    // else print winner
    if (winners.length > 1) {
        return winners;
    } else {
        return winner;
    }
}
