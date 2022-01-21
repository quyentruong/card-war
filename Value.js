// Number of faces: 13
export default class Value {
    /**
     * 
     * @param {String} value 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace
     */
    constructor(value) {
        this.value = value;
        const isNumber = /^\d+$/.test(value);
        if (isNumber) {
            this.value = parseInt(value);
        }
    }

    /**
     * 
     * @returns {Number} value of card
     */
    getValue() {
        if (this.value === 'Jack') {
            return 11;
        } else if (this.value === 'Queen') {
            return 12;
        } else if (this.value === 'King') {
            return 13;
        } else if (this.value === 'Ace') {
            return 14;
        } else if (this.value >= 2 && this.value <= 10) {
            return this.value;
        } else {
            return -1;
        }
    }

}