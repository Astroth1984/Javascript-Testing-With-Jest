const BowlingGame = require('./bowling-game');


let game;
beforeEach(() => {
    game = new BowlingGame();
});

it('Should return a 0 for a game of all zeros', () => {
    rollMany(20, 0);
    expect(game.score()).toEqual(0);
});


it('should return 20 of a game of ones', () => {
    rollMany(20, 1);
    expect(game.score()).toBe(20);
});

it('should return the correct score when a spare is rolled', () => {
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollMany(17, 0);

    expect(game.score()).toEqual(16);
});

it('should return the correct score when a strike is rolled', () => {
    game.roll(10);
    game.roll(1);
    game.roll(1);
    rollMany(16, 0);

    expect(game.score()).toBe(14);
});

it('max score is 300', () => {
    rollMany(1000000, 10);
    expect(game.score()).toEqual(300);
})


function rollMany(rolls, pins) {
    for (let i = 0; i < rolls; i++) {
        game.roll(pins)
    }
}