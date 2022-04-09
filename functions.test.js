const functions = require('./functions');

// beforeEach(() => console.log('a callback called before each test'));
// afterEach(() => console.log('a callback called after each test'));
// beforeAll(() => console.log('a callback called before all tests'));
// afterAll(() => console.log('a callback called after all tests'));


const checkName = () => console.log('Checking Name...');
describe('checkingNames', () => {
    beforeEach(() => checkName());

    test('Username is Jeff', () => {
        const username = 'Jeff';
        expect(username).toBe('Jeff');
    });

    test('Username is Kaeren', () => {
        const username = 'Kaeren';
        expect(username).toBe('Kaeren');
    });
})

test('Add 2 + 2 should equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 should NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// to BeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});


test('User should be Astroth 1984 Object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Astroth',
        lastName: '1984'
    });
});

// toBeLessThanOrEqual
// toBeLessThan
// toBeGreaterThan
// toBeGreaterThanOrEqual
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});

//Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
});

//Arrays
test('Admin should be in usernames', () => {
    const usernames = ['katlin', 'john', 'dow', 'admin'];
    expect(usernames).toContain('admin');
});

//AsyncTest ||working with Async Data
test('User fetched name should be Leanne Graham', async() => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});