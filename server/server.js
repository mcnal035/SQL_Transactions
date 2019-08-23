const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./routes/book.router.js');
const tagsRouter = require('./routes/tag.router.js');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/books', booksRouter);
app.use('/tags', tagsRouter);

// Start listening for requests on a specific port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
