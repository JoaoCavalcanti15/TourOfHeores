const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Enable body parsing
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/tour-of-heroes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Hero model
const Hero = mongoose.model('Hero', {
  name: String,
});

// Define endpoints
app.get('/heroes', async (req, res) => {
  const heroes = await Hero.find();
  res.json(heroes);
});

app.get('/hero/:id', async (req, res) => {
  const hero = await Hero.findById(req.params.id);
  res.json(hero);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
