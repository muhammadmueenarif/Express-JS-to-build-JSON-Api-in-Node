// require express
const express = require('express');

//using express as a function and storing it in variable app,
const app = express();

//app need to run on port so start a port. 
const port = 3000; //we can write any port like 5000 5001 or that we want. 

//to make app listen to outside world, so we will use listen 
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});