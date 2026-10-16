
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [books, setBooks] = useState([]);
  const [selectedId, setSelectedId] = useState('');

  const API = 'http://localhost:5000/books';

  // Fetch all books
  const getBooks = () => {
    fetch(API)
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getBooks();
  }, []);

  // Clear input fields
  const clearForm = () => {
    setBookName('');
    setAuthor('');
    setPrice('');
    setSelectedId('');
  };

  // Insert book
  const insertBook = () => {
    if (!bookName || !author || price === '') {
      alert('Please enter all book details');
      return;
    }

    fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        bookName: bookName,
        author: author,
        price: Number(price)
      })
    })
      .then(res => {
        if (!res.ok) throw new Error('Insert failed');
        return res.json();
      })
      .then(() => {
        alert('Book inserted successfully');
        clearForm();
        getBooks();
      })
      .catch(err => alert(err.message));
  };

  // Search book by name
  const searchBook = () => {
    if (!bookName.trim()) {
      alert('Enter a book name to search');
      return;
    }

    fetch(API)
      .then(res => res.json())
      .then(data => {
        const found = data.find(
          book => book.bookName.toLowerCase() === bookName.trim().toLowerCase()
        );

        if (found) {
          setBookName(found.bookName);
          setAuthor(found.author);
          setPrice(String(found.price));
          setSelectedId(found._id);
        } else {
          alert('Book not found');
        }
      })
      .catch(err => alert(err.message));
  };

  // Update book
  const updateBook = () => {
    if (!selectedId) {
      alert('Search a book first, then update it');
      return;
    }

    fetch(`${API}/${selectedId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        bookName: bookName,
        author: author,
        price: Number(price)
      })
    })
      .then(res => {
        if (!res.ok) throw new Error('Update failed');
        return res.json();
      })
      .then(() => {
        alert('Book updated successfully');
        clearForm();
        getBooks();
      })
      .catch(err => alert(err.message));
  };

  // Delete book
  const deleteBook = () => {
    if (!selectedId) {
      alert('Search a book first, then delete it');
      return;
    }

    fetch(`${API}/${selectedId}`, { method: 'DELETE' })
      .then(res => {
        if (!res.ok) throw new Error('Delete failed');
        return res.json();
      })
      .then(() => {
        alert('Book deleted successfully');
        clearForm();
        getBooks();
      })
      .catch(err => alert(err.message));
  };

  return (
    <div className="container">
      <h1>Book Management System</h1>

      <input
        placeholder="Book Name"
        value={bookName}
        onChange={e => setBookName(e.target.value)}
      />

      <input
        placeholder="Author Name"
        value={author}
        onChange={e => setAuthor(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />

      <div className="buttons">
        <button onClick={insertBook}>Insert</button>
        <button onClick={searchBook}>Search</button>
        <button onClick={updateBook}>Update</button>
        <button onClick={deleteBook}>Delete</button>
      </div>

      <h2>Book List</h2>

      {books.map(book => (
        <div className="book-item" key={book._id}>
          <span>
            {book.bookName} — {book.author} — ₹{book.price}
          </span>
          <button onClick={() => {
            setBookName(book.bookName);
            setAuthor(book.author);
            setPrice(String(book.price));
            setSelectedId(book._id);
          }}>
            Select
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
