import operate from '../logic/operate';

describe('operations in calculator', () => {
  test('multiply 3*3 to equal 9', () => {
    const result = operate(3, 3, 'x');
    expect(result).toBe('9');
  });
  test('division of 10/2', () => {
    const divide = operate(10, 2, '÷');
    expect(divide).toBe('5');
  });
  test('substraction to substract 10-2', () => {
    const substract = operate(2, 3, '-');
    expect(substract).toBe('-1');
  });
  test('addition of 10+2', () => {
    const addition = operate(10, 2, '+');
    expect(addition).toBe('12');
  });
  test('modulos', () => {
    const modulos = operate(5, 2, '%');
    expect(modulos).toBe('1');
  });
  test('multiply 10*2', () => {
    const result = operate(10, 2, 'x');
    expect(result).toBe('20');
  });
});
