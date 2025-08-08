// frontend/src/components/BookmarkForm.js

import React, { useState } from 'react';
import axios from 'axios';

function BookmarkForm() {
  // 1. State for each input field
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState(''); // To provide user feedback

  // 2. This function runs when the form is submitted
  const handleSubmit = (e) => {
    // Prevents the default form submission behavior (page refresh)
    e.preventDefault();

    const newBookmark = {
      title: title,
      url: url,
    };

    // 3. Send a POST request to the backend
    axios.post('http://10.146.3.4/bookmarks/add', newBookmark)
      .then(res => {
        console.log(res.data);
        setMessage('Bookmark added successfully!');
        // Clear the form fields
        setTitle('');
        setUrl('');
        // Hide the message after 3 seconds
        setTimeout(() => setMessage(''), 3000);
      })
      .catch(err => {
        console.error('There was an error adding the bookmark!', err);
        setMessage('Error adding bookmark. Please try again.');
        setTimeout(() => setMessage(''), 3000);
      });
  };

  return (
    <div>
      <h3>Add a New Bookmark</h3>
      {/* 4. The form element with an onSubmit handler */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>URL: </label>
          <input
            type="text"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Add Bookmark</button>
        </div>
      </form>
      {/* Display the success/error message */}
      {message && <p>{message}</p>}
    </div>
  );
}

export default BookmarkForm;