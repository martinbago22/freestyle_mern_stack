import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Event from './model/Event.js';

dotenv.config();
const MONGO_URL = process.env.MONGO_URL;

const app = express();
app.use(express.json());

app.post('/api/events', async (req, res) => {
  console.log('fut a postos endpoint');
  try {
    const name = req.body.name;
    const image = req.body.image;
    const date = req.body.date;
    const details = req.body.details;
    const price = req.body.price;
    const location = req.body.location;
    const available = req.body.available;
    const newEvent = new Event({
      name,
      image,
      date,
      details,
      price,
      location,
      available,
    });
    const events = await newEvent.save();
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false });
  }
});

app.patch('/api/events/:id', async (req, res) => {
  console.log('fut a postos endpoint');
  try {
    const event = await Event.findById(req.params.id);
    event.name = req.body.name;
    event.image = req.body.image;
    event.date = req.body.date;
    event.details = req.body.details;
    event.price = req.body.price;
    event.location = req.body.location;
    event.available = req.body.available;
    const events = await event.save();
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false });
  }
});

async function main() {
  await mongoose.connect(MONGO_URL);
  app.listen(5000, () => {
    console.log('Fussatok bolondok: 5000');
  });
}


main();


