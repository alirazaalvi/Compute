import { evaluateExpression } from './computeService';

describe('evaluateExpression', () => {
  it('returns true for simple true expression', () => {
    const expression = { '==': [1, 1] };
    expect(evaluateExpression(expression)).toBe(true);
  });

  it('returns false for simple false expression', () => {
    const expression = { '==': [1, 2] };
    expect(evaluateExpression(expression)).toBe(false);
  });

  it('returns true for complex true expression', () => {
    const expression = {
      '&&': [
        { '==': [1, 1] },
        {
          '||': [{ '==': [2, 2] }, { '>': [3, 2] }],
        },
      ],
    };
    expect(evaluateExpression(expression)).toBe(true);
  });

  it('returns false for complex false expression', () => {
    const expression = {
      '&&': [
        { '==': [1, 1] },
        {
          '||': [{ '==': [2, 3] }, { '>': [3, 4] }],
        },
      ],
    };
    expect(evaluateExpression(expression)).toBe(false);
  });

  it('returns true for negation of false expression', () => {
    const expression = { '!': { '==': [1, 2] } };
    expect(evaluateExpression(expression)).toBe(true);
  });

  it('returns false for negation of true expression', () => {
    const expression = { '!': { '==': [1, 1] } };
    expect(evaluateExpression(expression)).toBe(false);
  });

  it('throws an error for invalid operator', () => {
    const expression = { '@': [1, 2] };
    expect(() => evaluateExpression(expression)).toThrowError('Invalid operator: @');
  });

  it('returns true for equal values with different types', () => {
    const expression = { '==': [1, '1'] };
    expect(evaluateExpression(expression)).toBe(true);
  });

  it('returns true for not equal values', () => {
    const expression = { '!': { '==': [1, 2] } };
    expect(evaluateExpression(expression)).toBe(true);
  });

  it('returns true for greater than comparison with numbers', () => {
    const expression = { '>': [3, 2] };
    expect(evaluateExpression(expression)).toBe(true);
  });

  it('returns false for greater than comparison with equal numbers', () => {
    const expression = { '>': [2, 2] };
    expect(evaluateExpression(expression)).toBe(false);
  });

  it('returns false for greater than comparison with lesser number', () => {
    const expression = { '>': [1, 2] };
    expect(evaluateExpression(expression)).toBe(false);
  });

  it('returns true for greater than or equal to comparison with numbers', () => {
    const expression = { '>=': [3, 2] };
    expect(evaluateExpression(expression)).toBe(true);
  });

  it('returns true for greater than or equal to comparison with equal numbers', () => {
    const expression = { '>=': [2, 2] };
    expect(evaluateExpression(expression)).toBe(true);
  });

  it('returns true for less than comparison with numbers', () => {
    const expression = { '<': [2, 3] };
    expect(evaluateExpression(expression)).toBe(true);
  });

  it('returns false for less than comparison with equal numbers', () => {
    const expression = { '<': [2, 2] };
    expect(evaluateExpression(expression)).toBe(false);
  });

  it('returns false for less than comparison with greater number', () => {
    const expression = { '<': [2, 1] };
    expect(evaluateExpression(expression)).toBe(false);
  });

  it('returns true for less than or equal to comparison with numbers', () => {
    const expression = { '<=': [2, 3] };
    expect(evaluateExpression(expression)).toBe(true);
  });

  it('returns true for greater than or equal to comparison with equal numbers', () => {
    const expression = { '<=': [2, 2] };
    expect(evaluateExpression(expression)).toBe(true);
  });
});
