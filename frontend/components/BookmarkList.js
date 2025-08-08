// In your component
import axios from 'axios';
import { useState, useEffect } from 'react';

useEffect(() => {
  axios.get('http://localhost:5000/bookmarks/')
    .then(response => {
      setBookmarks(response.data); // Assuming you have a state variable named 'bookmarks'
    })
    .catch((error) => {
      console.log(error);
    })
}, []);