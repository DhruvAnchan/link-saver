// frontend/src/App.js

import React from 'react';
import BookmarkList from './components/BookmarkList';
import BookmarkForm from './components/BookmarkForm';

function App() {
  return (
    <div className="container">
      <h1>LinkSaver</h1>
      <BookmarkForm />
      <BookmarkList />
    </div>
  );
}

export default App;