import Big from 'big.js';

class OperationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'OperationError';
  }
}

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne);
  const two = Big(numberTwo);
  let result;

  switch (operation) {
    case '+':
      result = one.plus(two);
      break;
    case '-':
      result = one.minus(two);
      break;
    case 'x':
      result = one.times(two);
      break;
    case '÷':
      if (two.eq(0)) {
        throw new OperationError("Can't divide by 0.");
      }
      result = one.div(two);
      break;
    case '%':
      if (two.eq(0)) {
        throw new OperationError("Can't find modulo as can't divide by 0.");
      }
      result = one.mod(two);
      break;
    default:
      throw new OperationError(`Unknown operation '${operation}'`);
  }

  return result.toString();
}
