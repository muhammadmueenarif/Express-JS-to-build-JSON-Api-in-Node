we will discuss crud operations. create, read, update and delete. 
Express is framework for nodejs. NodeJS is JavaScript that run on server side.
we will learn First generate project with node js. second write first Express js project. then how to run 
server. how to create our routes. Next, roots to get all resources to get a specific resource by ID to delete
or update a resource 
we want to focus on express so we don't need to deal with any database configuration. we will have books and
we can get all books or get book by specific id or update title of book or delete book. 


Lec 2. Generating project with NPM. 
first install node js. write npm init command. give details. write author name and license as MIT. 
You can skip other details by simply just pressing enter. this command will generate package.json file. 
main file will be index.js and you can set your own main file by giving its name while npm init command
like app.js.  

After this install express by npm install express. if it does not add directly in package.json file then 
you can add it using npm install --save express. but new version add automatically. 


Lec 3. Setup and run express server. 
create app.js file that will hold our startup code for server. as we have made app.js our main file while 
instaling npm init. first we import or require express. 
const express = require('express');
then we can use express() to call this as a function. 
const app = express();
app need to run on specific port so we will start a port. 
const port = 3000; we can use any port. 

to make app listen to outside world, so we will use listen 
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

write node (file name) app.js command to check server is running. 


Lec 4. Defining first get route in express. 
if you start server by node app.js and open localhost3000 in browser you will see cannot get/. this is 
beacause we did not specify any route. 
we will write route b/w port and listen. 


Lec 5. Using postman to test api. 
download and install postman. watch simple video on youtube how to use it. check the request you are sending 
and use same method in postman and check the route on which you are sending request and use that same route 
in postman. send request and it will show response and its status code also. 200 means ok. 
we can send json or array directly in res.send like res.send({name:'kashan'}); 
res.send([{name:'kashan', id:1}, {name:'moin, id:'2'}]);


Lec 6. Writing route to get all route. 
create book.js flle and write some books as a hardcoded data that you want to use and on which you want to 
perform operations beacause we have not set up database. then export it using module.export = {
    findAll() {
        return books;
    }
}
send book as response. res.send(book); it will automatically require book import it at the top of app.js file. 
