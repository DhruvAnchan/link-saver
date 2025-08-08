// backend/routes/bookmarks.js
const router = require('express').Router();
let Bookmark = require('../models/bookmark.model');

// GET all bookmarks
router.route('/').get((req, res) => {
  Bookmark.find()
    .then(bookmarks => res.json(bookmarks))
    .catch(err => res.status(400).json({ error: err }));
});

// POST (add) a new bookmark
router.route('/add').post((req, res) => {
  // --- ADD THIS LOG ---
  // This will tell us if the request successfully reaches this specific route handler.
  console.log('✅ Request has reached the /bookmarks/add route handler!');
  
  // Use a default empty object to prevent a crash if req.body is undefined
  const { title, url, description } = req.body || {}; 
  
  const newBookmark = new Bookmark({ title, url, description });

  newBookmark.save()
    .then(() => res.json('Bookmark added!'))
    .catch(err => res.status(400).json({ error: err }));
});

// DELETE a bookmark
router.route('/:id').delete((req, res) => {
  Bookmark.findByIdAndDelete(req.params.id)
    .then(() => res.json('Bookmark deleted.'))
    .catch(err => res.status(400).json({ error: err }));
});

module.exports = router;
