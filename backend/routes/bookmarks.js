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
  // --- THIS IS THE CRUCIAL DEBUGGING STEP ---
  // Let's log the request body to see what the server is receiving.
  console.log('--- Request Body Received ---');
  console.log(req.body);
  console.log('---------------------------');
  
  const { title, url, description } = req.body;
  const newBookmark = new Bookmark({ title, url, description });

  newBookmark.save()
    .then(() => res.json('Bookmark added!'))
    .catch(err => {
      // Log the specific save error
      console.error('--- Mongoose Save Error ---');
      console.error(err);
      console.error('---------------------------');
      res.status(400).json({ error: err })
    });
});

// DELETE a bookmark
router.route('/:id').delete((req, res) => {
  Bookmark.findByIdAndDelete(req.params.id)
    .then(() => res.json('Bookmark deleted.'))
    .catch(err => res.status(400).json({ error: err }));
});

module.exports = router;
