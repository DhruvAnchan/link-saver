// In your form submit handler
const newBookmark = { title: 'Google', url: 'https://google.com' };
axios.post('http://localhost:5000/bookmarks/add', newBookmark)
  .then(res => console.log(res.data));