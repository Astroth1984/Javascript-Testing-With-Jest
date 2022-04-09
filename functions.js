const { default: axios } = require("axios");

const functions = {
    add: (a, b) => a + b,
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = { firstName: 'Astroth' };
        user['lastName'] = '1984';
        return user;
    },
    fetchUser: () =>
        axios
        .get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'error')
}

console.log(functions.add(2, 2));

module.exports = functions;