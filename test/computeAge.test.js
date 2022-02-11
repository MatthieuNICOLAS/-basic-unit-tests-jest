const computeAge = require("../src/computeAge")

test('computeage returns 0', () => {

    expect(computeAge(new Date(2005,11,15),new Date(2005,11,15))).toBe(0);

})
test('computeage returns 21', () => {

    expect(computeAge(new Date(2000,7,18),new Date(2022,1,14))).toBe(21);

})
test('computeage returns 20', () => {

    expect(computeAge(new Date(2002,1,8),new Date(2022,1,14))).toBe(20);

})
test('computeage returns error message', () => {

    expect(computeAge(new Date(2023,1,8),new Date(2022,1,14))).toBe('Votre date d\'anniversaire dépasse celle d\'aujourd\'hui');

})