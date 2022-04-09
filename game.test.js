// should return 20 of a game of ones
// should return the correct score when a spare is rolled
// should return the correct score when a strike is rolled
// max score is 300


const Game = require('./game');

let game;
beforeEach(() => {
    game = new Game();
});

it('should return Zzero of a game of zeroes', () => {
    rollMany(20, 0);
    expect(game.getScore()).toBe(0);
});


it('should return 20 of a game of ones', () => {
    rollMany(20, 1)
    expect(game.getScore()).toEqual(20);
});

it('should return the correct score when a spare is rolled', () => {
    game.roll(5);
    game.roll(5);
    game.roll(1);
    rollMany(17, 0);

    expect(game.getScore()).toBe(12);
});

it('should return the correct score when a strike is rolled', () => {
    game.roll(10);
    game.roll(1);
    game.roll(1);
    rollMany(16, 0);

    expect(game.getScore()).toEqual(14);
});

it('max score is 300', () => {
    rollMany(12, 10);

    expect(game.getScore()).toEqual(300);
})


function rollMany(rolls, pins) {
    for (let i = 0; i < rolls; i++) {
        game.roll(pins);
    }
}