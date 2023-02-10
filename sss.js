const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/admin', { useNewUrlParser: true });

// Define MongoDB schema
const dataSchema = new mongoose.Schema({
  label: String,
  value: Number
});

// Compile schema into a model
const Data = mongoose.model('Data', dataSchema);

// Route to retrieve data from MongoDB
app.get('/getData', (req, res) => {
  Data.find((err, data) => {
    if (err) return console.error(err);
    res.json({
      labels: data.map(d => d.label),
      data: data.map(d => d.value)
    });
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
