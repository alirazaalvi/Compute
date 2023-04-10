import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { computeRouter } from './api/compute/api';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// parse application/json
app.use(bodyParser.json());

app.use(express.json());

app.use('/api/v1/compute', computeRouter);

app.listen(port, () => {
  console.log(`API is listening on port ${port}.`);
});
