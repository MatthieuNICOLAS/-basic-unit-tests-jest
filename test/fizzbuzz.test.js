const fizzBuzz = require("../src/fizzbuzz")

test('fizzbuzz returns fizz', () => {

    expect(fizzBuzz(3)).toBe('fizz');

})
test('fizzbuzz returns buzz', () => {

    expect(fizzBuzz(5)).toBe('buzz');

})
test('fizzbuzz returns fizzbuzz', () => {

    expect(fizzBuzz(8)).toBe('fizzbuzz');

})
test('fizzbuzz returns fizzbuzz', () => {

    expect(fizzBuzz(22)).toBe('fizzbuzz');

})
test('fizzbuzz returns fizzbuzz', () => {

    expect(fizzBuzz(16)).toBe('fizzbuzz');

})