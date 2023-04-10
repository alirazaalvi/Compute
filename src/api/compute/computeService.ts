import { Expression } from './types';

export const computeExpression = (expression: Expression): boolean => {
  const operators = Object.keys(expression);
  const operator = operators[0];
  const operands = expression[operator];
  switch (operator) {
    case '&&':
      return operands.every((operand) => computeExpression(operand));
    case '||':
      return operands.some((operand) => computeExpression(operand));
    case '!':
      return !computeExpression(operands);
    case '==':
      return operands[0] == operands[1];
    case '!=':
      return !computeExpression(operands[operator]);
    case '>':
      return operands[0] > operands[1];
    case '>=':
      return operands[0] >= operands[1];
    case '<':
      return operands[0] < operands[1];
    case '<=':
      return operands[0] <= operands[1];
    default:
      return false;
  }
};
