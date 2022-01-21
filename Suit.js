// Number of suits: 4
export default class Suit {
    /**
     * 
     * @param {String} suit Clubs, Spades, Hearts, Dimonds
     */
    constructor(suit) {
        this.suit = suit;
    }

    /**
     * 
     * @returns {Number} value of suit
     */
    getSuitValue() {
        switch (this.suit) {
            case 'Clubs':
                return 0;
            case 'Spades':
                return 1;
            case 'Hearts':
                return 2;
            case 'Dimonds':
                return 3;
            default:
                return -1;
        }
    }
}