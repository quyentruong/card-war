import war from '../Play.js';
import { expect } from 'chai';


describe('War Function', () => {
    describe('Example 1', () => {
        it('Casey will win', () => {
            let deck = ["5 of Spades", "Ace of Diamonds", "Jack of Diamonds", "7 of Hearts", "3 of Clubs", "3 of Spades"];
            let players = [
                {
                    "Name": "Nathan",
                    "Deck": [],
                    "Discard": []
                },
                {
                    "Name": "Casey",
                    "Deck": [],
                    "Discard": []
                }
            ];
            const winner = war(deck, players);
            expect(winner.Name).to.equal('Casey');
            expect(winner.Discard).to.have.lengthOf(4);
            expect(winner.Discard.indexOf('5 of Spades')).to.equal(0);
            expect(winner.Discard.indexOf('3 of Spades')).to.equal(3);
            console.log(winner);
        });
    });
    describe('Example 2', () => {
        it('A tie', () => {
            let deck = ["King of Clubs"];
            let players = [
                {
                    "Name": "Nathan",
                    "Deck": [],
                    "Discard": []
                },
                {
                    "Name": "Casey",
                    "Deck": [],
                    "Discard": []
                }
            ];
            const winner = war(deck, players);
            expect(winner).to.have.lengthOf(2);
            expect(winner[0].Name).to.equal('Nathan');
            expect(winner[1].Name).to.equal('Casey');
            expect(winner[0].Deck).to.have.lengthOf(1);
            expect(winner[0].Discard).to.have.lengthOf(0);
            expect(winner[1].Discard).to.have.lengthOf(0);
            console.log(winner);
        });
    });
    describe('Example 3', () => {
        it('Nathan will win', () => {
            let deck = ["Ace of Diamonds", "King of Clubs", "9 of Spades", "4 of Spades", "3 of Hearts"];
            let players = [
                {
                    "Name": "Nathan",
                    "Deck": [],
                    "Discard": []
                },
                {
                    "Name": "Casey",
                    "Deck": [],
                    "Discard": []
                }
            ];
            const winner = war(deck, players);
            expect(winner.Name).to.equal('Nathan');
            expect(winner.Discard).to.have.lengthOf(4);
            expect(winner.Discard.indexOf('Ace of Diamonds')).to.equal(0);
            expect(winner.Discard.indexOf('4 of Spades')).to.equal(3);
            expect(winner.Deck).to.have.lengthOf(1);
            console.log(winner);
        });
    });
});
// assert.typeOf(foo, 'string'); // without optional message
// assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
// assert.equal(foo, 'bar', 'foo equal `bar`');
// assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
// assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');