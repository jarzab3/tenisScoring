var Tennis = function Tennis() {
    this.player1_points = 0;
    this.player2_points = 0;

    this.scores = {
        0: 'love',
        1: 15,
        2: 30,
        3: 40
    };

    this.leadingPlayer = function() {
        return this.player1_points > this.player2_points ? 1 : 2;
    };

    this.isPointsHighEnoughToWin = function () {
        return this.player1_points >= 4 || this.player2_points >= 4
    };

    this.leadingBy = function () {
        return Math.abs(this.player1_points - this.player2_points)
    };

    this.playerWins = function() {
        if (this.isPointsHighEnoughToWin() && this.leadingBy() >= 2)  {
            return 'game player ' + this.leadingPlayer();
        }
    };

    this.evenScores = function() {
        return this.leadingBy() === 0;
    };

    this.deuce = function () {
        if(this.evenScores() && this.player1_points >= 3) {
            return 'deuce';
        }
    };

    this.advantage = function () {
        if (this.isPointsHighEnoughToWin() && this.leadingBy() === 1) {
            return 'advantage player '  + this.leadingPlayer()
        }
    };

    this.normalScoring = function() {
        var scoreMessageParts = [this.scores[this.player1_points], this.scores[this.player2_points]];
        if(this.evenScores()) {
            scoreMessageParts[1] = 'all';
        }
        return scoreMessageParts.join(" ");
    }
};

Tennis.prototype = {

    score: function score() {
        return this.playerWins()
            || this.deuce()
            || this.advantage()
            || this.normalScoring();
    },

    player1scores: function player1scores() {
        this.player1_points++;
    },

    player2scores: function player2scores() {
        this.player2_points ++;
    }
};

module.exports = Tennis;
