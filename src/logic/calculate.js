import operate from './operate';

function isNumber(item) {
  return /\d/.test(item);
}

export default function calculate(obj, buttonName) {
  const { total, next, operation } = obj;

  switch (buttonName) {
    case 'AC':
      return {
        total: null,
        next: null,
        operation: null,
      };
    case '+/-':
      return {
        ...obj,
        next: (next ? -1 * parseFloat(next) : null),
        total: (total ? -1 * parseFloat(total) : null),
      };
    case '.':
      if (next && next.includes('.')) {
        return obj;
      }
      return {
        ...obj,
        next: (next ? `${next}.` : '0.'),
      };
    case '=':
      if (next && operation) {
        return {
          total: operate(total, next, operation),
          next: null,
          operation: null,
        };
      }
      return {};
    default:
      if (isNumber(buttonName)) {
        if (buttonName === '0' && next === '0') {
          return {};
        }
        if (operation) {
          return {
            ...obj,
            next: (next && next !== '0') ? next + buttonName : buttonName,
          };
        }
        return {
          ...obj,
          next: (next && next !== '0') ? next + buttonName : buttonName,
          total: null,
        };
      }
      if (!next && total && !operation) {
        return {
          ...obj,
          operation: buttonName,
        };
      }
      if (operation) {
        if (total && !next) {
          return {
            ...obj,
            operation: buttonName,
          };
        }
        return {
          total: operate(total, next, operation),
          next: null,
          operation: buttonName,
        };
      }
      return {
        ...obj,
        total: next,
        next: null,
        operation: buttonName,
      };
  }
}
