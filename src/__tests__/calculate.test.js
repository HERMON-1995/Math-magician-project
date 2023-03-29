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
    test('= button', () => {
      const output = calculate({
        total: '5',
        next: '5',
        operation: '+',
      }, '=');
      expect(output.total).toBe('10');
    });
  });
