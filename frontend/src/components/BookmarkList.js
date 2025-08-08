// frontend/src/components/BookmarkList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookmarkList() {
  // 1. Create a state variable to hold our bookmarks
  const [bookmarks, setBookmarks] = useState([]);

  // 2. useEffect runs once when the component loads
  useEffect(() => {
    // 3. Use axios to make a GET request to our backend API
    axios.get('http://10.146.3.4/bookmarks/add')
      .then(response => {
        // 4. If the request is successful, update the state
        console.log('Data received:', response.data);
        setBookmarks(response.data);
      })
      .catch(error => {
        // 5. If there's an error, log it to the console
        console.error('There was an error fetching the bookmarks!', error);
      });
  }, []); // The empty array [] means this effect runs only once

  return (
    <div>
      <h2>My Bookmarks</h2>
      
      {/* 6. Map over the bookmarks array and display each one */}
      {bookmarks.length > 0 ? (
        <ul>
          {bookmarks.map(bookmark => (
            <li key={bookmark._id}>
              <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
                {bookmark.title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookmarks saved yet. Add one using the form above!</p>
      )}
    </div>
  );
}

export default BookmarkList;