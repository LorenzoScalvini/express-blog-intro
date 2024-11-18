const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const posts = require('./posts/postsData');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Benvenuti nel mio blog :)');
});

app.get('/foods', (req, res) => {
  res.json({
    posts: posts,
    count: posts.length
  });
});

app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
