import calculate from '../logic/calculate';

describe('test on calculate.js function', () => {
  test('when AC button is pressed', () => {
    const output = calculate({
      total: '8',
      next: '6',
      operation: '',
    }, 'AC');
    expect(output).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
});
