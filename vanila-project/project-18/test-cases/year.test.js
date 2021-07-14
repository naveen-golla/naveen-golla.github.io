const find = require('./year')

test('finding the days', () => {
    expect(find(2021)).toBe(199)
});