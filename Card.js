// Number of cards: 52
import Suit from "./Suit.js";
import Value from "./Value.js";
export default class Card {
    /**
     * 
     * @param {String} card in format {value} of {suit} 
     */
    constructor(card) {
        card = card.split(' of ');
        this.value = card[0];
        this.suit = card[1];
    }
    /**
     * 
     * @returns {Number} value of suit
     */
    getSuitValue() {
        return new Suit(this.suit).getSuitValue();
    }
    /**
     * 
     * @returns {Number} value of card
     */
    getValue() {
        return new Value(this.value).getValue();
    }
    /**
     * 
     * @param {String} card 
     * @returns 1 if this card is greater than the card passed in, 
     *          -1 if this card is less than the card passed in, 
     *          0 if they are equal
     */
    compare(card) {
        if (this.getValue() > card.getValue()) {
            return 1;
        } else if (this.getValue() < card.getValue()) {
            return -1;
        } else {
            if (this.getSuitValue() > card.getSuitValue()) {
                return 1;
            } else if (this.getSuitValue() < card.getSuitValue()) {
                return -1;
            }
            return 0;
        }
    }
}