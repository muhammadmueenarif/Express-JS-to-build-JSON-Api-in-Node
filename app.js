// require express
const express = require('express');
const Book = require('./Book'); //imported it from other file. 

//using express as a function and storing it in variable app,
const app = express();

//app need to run on port so start a port. 
const port = 3000; //we can write any port like 5000 5001 or that we want. 


//app.get method is used to handle HTTP GET requests. we can use app.get() to handle different routes.
//we can use res.send to show outpur or response on screen. 
app.get('/books', (req, res) => {
    res.send(Book.findAll()); //find all books.
    //res.send like res.send({name:'kashan'}); sending json in response. 
    //res.send([{name:'kashan', id:1}, {name:'moin, id:'2'}]); sending array in response. 
});

//to get specific book by id. 
app.get('/books/:bookId', (req, res) => {
  const bookId = req.params.bookId;
  const book = Book.findOne(bookId); 
  if (!book) {
    res.send(404, {
      message: 'Book not found',
    });
    return;
  }
  res.send(book);
   
    // const book = Book.findAll().find(b => b.id === req.params.id); //find book by id.
    // if(book) {
    //     res.send(book); //if book found then send it. 
    // } else {
    //     res.status(404).send({message: 'Book not found'}); //if book not found then send 404 status and message.
    // }
});

//to make app listen to outside world, so we will use listen 
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

