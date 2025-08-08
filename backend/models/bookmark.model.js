// backend/models/bookmark.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookmarkSchema = new Schema({
  title: { type: String, required: true, trim: true },
  url: { type: String, required: true },
  description: { type: String },
}, {
  timestamps: true,
});

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);
module.exports = Bookmark;