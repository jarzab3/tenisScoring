var assert = require('assert');
var Tennis = require("../tennis.js");


describe('Tennis', function () {
    [
        [0, 0, 'love all'],
        [1, 0, '15 love'],
        [2, 0, '30 love'],
        [3, 0, '40 love'],
        [4, 0, 'game player 1'],
        [0, 4, 'game player 2'],
        [0, 1, 'love 15'],
        [0, 2, 'love 30'],
        [1, 2, '15 30'],
        [2, 2, '30 all'],
        [3, 3, 'deuce'],
        [3, 4, 'advantage player 2'],
        [4, 4, 'deuce'],
        [5, 4, 'advantage player 1'],
        [5, 5, 'deuce'],
        [6, 5, 'advantage player 1'],
        [7, 5, 'game player 1'],
        [5, 7, 'game player 2'],
        [599, 99, 'game player 2']
    ].forEach(function(ary) {
        it('p1:' + ary[0] + ' p2:' + ary[1] + ' score: ' + ary[2], function () {
            var tennis = new Tennis;
            for (i = 0; i < ary[0]; i++) {
                tennis.player1scores();
            }
            for (i = 0; i < ary[1]; i++) {
                tennis.player2scores();
            }
            assert.equal(tennis.score(), ary[2]);
        });
    });
});
