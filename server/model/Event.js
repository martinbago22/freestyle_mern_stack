import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const eventSchema = new Schema({
  name: String,
  image: {
    type: String,
    default: '/public/event.png',
  },
  date: Date,
  details: String,
  price: Number,
  location: String,
  available: Number,
});

export default model('Event', eventSchema);
