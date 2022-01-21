// Contain deck of playing cards
export default class Deck {
    /**
     * 
     * @param {Array} deck Ex: [5 of Spades, Ace of Diamonds, Jack of Diamonds, 7 of Hearts, 3 of Clubs, 3 of Spades] 
     */
    constructor(deck) {
        this.deck = deck;
    }

    /**
     * 
     * @returns {String} card on the top of the deck. Else return null if deck is empty
     */
    deal() {
        if (this.deck.length > 0) {
            return this.deck.shift();
        }
        return null;
    }

    /**
     * 
     * @returns {Number} number of cards in the deck
     */
    count() {
        return this.deck.length;
    }
}