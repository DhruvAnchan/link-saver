// backend/routes/bookmarks.js
const router = require('express').Router();
let Bookmark = require('../models/bookmark.model');

// GET all bookmarks
router.route('/').get((req, res) => {
  Bookmark.find()
    .then(bookmarks => res.json(bookmarks))
    .catch(err => res.status(400).json('Error: ' + err));
});

// POST (add) a new bookmark
router.route('/add').post((req, res) => {
  const { title, url, description } = req.body;
  const newBookmark = new Bookmark({ title, url, description });

  newBookmark.save()
    .then(() => res.json('Bookmark added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE a bookmark
router.route('/:id').delete((req, res) => {
  Bookmark.findByIdAndDelete(req.params.id)
    .then(() => res.json('Bookmark deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// ... add routes for finding by ID and updating later ...

module.exports = router;