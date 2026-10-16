
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const API_PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/bookdb')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Book Schema
const bookSchema = new mongoose.Schema({
  bookName: String,
  author: String,
  price: Number
});

const Book = mongoose.model('Book', bookSchema);

// Test Route
app.get('/', (req, res) => {
  res.send('Book Management System Backend is Running!');
});

// INSERT BOOK
app.post('/books', (req, res) => {
  const book = new Book(req.body);

  book.save()
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err));
});

// SEARCH ALL BOOKS
app.get('/books', (req, res) => {
  Book.find()
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err));
});

// UPDATE BOOK
app.put('/books/:id', (req, res) => {
  Book.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  )
    .then(data => {
      if (!data) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.json(data);
    })
    .catch(err => res.status(500).json(err));
});

// DELETE BOOK
app.delete('/books/:id', (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(data => {
      if (!data) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.json({ message: 'Book deleted successfully' });
    })
    .catch(err => res.status(500).json(err));
});

// Start Server
app.listen(API_PORT, () => {
  console.log('Server is running on port 5000');
});
