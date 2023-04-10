import { Router, Request, Response } from 'express';
import { computeExpression } from './computeService';
import { Expression, Results } from './types';

// In memory cache. This should be moved to some cache system like redis, memcached or
// mongodb
const results: Results = {};

export const computeRouter = Router();

computeRouter.post('/', (req: Request, res: Response) => {
  const expression: Expression = req.body;

  // TODO: It should have a proper validation for an object
  if (!expression || Object.keys(expression).length === 0) {
    return res.status(400).json({ error: 'Missing expression' });
  }

  const id = JSON.stringify(expression);
  let result = results[id];
  if (result === undefined) {
    result = computeExpression(expression);
    results[id] = result;
  }
  res.json({ result });
});

export default computeRouter;
