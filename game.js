class Game {
    constructor() {
        this.rolls = [];
        this.score = 0;
    }

    roll(pins) {
        this.rolls.push(pins);
    }

    getScore() {
        let rollIdx = 0;
        for (let frameIdx = 0; frameIdx < 10; frameIdx++) {
            if (this.isStrike(rollIdx)) {
                this.score += this.strikeBonus(rollIdx);
                rollIdx++;
                continue;
            }

            let frameScore = this.rolls[rollIdx] + this.rolls[rollIdx + 1];
            if (this.isSpare(rollIdx)) {
                this.score += this.spareBonus(rollIdx);
            } else {
                this.score += frameScore;
            }

            rollIdx += 2;


        }
        return this.score;
    }

    isSpare(rollIdx) {
        return this.rolls[rollIdx] + this.rolls[rollIdx + 1] === 10;
    }

    spareBonus(rollIdx) {
        return 10 + this.rolls[rollIdx + 2]
    }

    isStrike(rollIdx) {
        return this.rolls[rollIdx] === 10
    }

    strikeBonus(rollIdx) {
        return 10 + this.rolls[rollIdx + 1] + this.rolls[rollIdx + 2]
    }
};

module.exports = Game;