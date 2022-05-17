const factorial = (value) => {
  const isMissingValue = value === undefined;
  const isNotNumber = typeof value !== 'number';
  const isNumberOutOfRange = value < 0;

  if (isMissingValue) {
    throw new Error('Missing value');
  }

  if (isNotNumber) {
    throw new TypeError('Value must be a number');
  }

  if (isNumberOutOfRange) {
    throw new RangeError('The value must be positive');
  }

  const isNumberOneOrZero = value === 0 || value === 1;

  return isNumberOneOrZero ? 1 : value * factorial(value - 1);
};

export default factorial;
