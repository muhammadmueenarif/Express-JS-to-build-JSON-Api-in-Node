// require express
const express = require('express');
const Book = require('./Book');

//using express as a function and storing it in variable app,
const app = express();

//app need to run on port so start a port. 
const port = 3000; //we can write any port like 5000 5001 or that we want. 


//app.get method is used to handle HTTP GET requests. we can use app.get() to handle different routes.
//we can use res.send to show outpur or response on screen. 
app.get('/books', (req, res) => {
    res.send(Book.findAll());
    //res.send like res.send({name:'kashan'}); sending json in response. 
    //res.send([{name:'kashan', id:1}, {name:'moin, id:'2'}]); sending array in response. 
});

//to make app listen to outside world, so we will use listen 
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

