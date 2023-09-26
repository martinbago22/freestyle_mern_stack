import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import * as path from 'path';
import Event from './model/Event.js';

dotenv.config();
const MONGO_URL = process.env.MONGO_URL;

const app = express();
app.use(express.json());
app.use('/public/', express.static(path.resolve('./public')));


app.get('/api/events', async (req, res, next) => {
  try {
    const allEvenets = await Event.find();
    res.json(allEvenets);
  } catch (err) {
    next(err);
  }
});


async function main() {
  await mongoose.connect(MONGO_URL);
  app.listen(5000, () => {
    console.log('Fussatok bolondok: 5000');
  });
}

main();


