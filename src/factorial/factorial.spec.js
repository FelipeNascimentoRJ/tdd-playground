import factorial from './factorial';

describe('Factorial method', () => {
  it('should be a function', () => {
    expect(factorial).toBeInstanceOf(Function);
  });

  it('should throw a type error when not passing value', () => {
    expect(() => factorial()).toThrow();
    expect(() => factorial()).toThrow(Error);
    expect(() => factorial()).toThrow('Missing value');
  });

  it('should throw an error when passing a value other than number', () => {
    expect(() => factorial('')).toThrow();
    expect(() => factorial({})).toThrow(TypeError);
    expect(() => factorial(null)).toThrow('Value must be a number');
  });

  it('should throw an error when passing a negative number value', () => {
    expect(() => factorial(-1)).toThrow();
    expect(() => factorial(-10)).toThrow(RangeError);
    expect(() => factorial(-11)).toThrow('The value must be positive');
  });

  it('should be returns (1) passing (0)', () => {
    const result = factorial(0);
    expect(result).toBe(1);
  });

  it('should be returns (6) passing (3)', () => {
    const result = factorial(3);
    expect(result).toBe(6);
  });

  it('should be returns (24) passing (4)', () => {
    const result = factorial(4);
    expect(result).toBe(24);
  });
});