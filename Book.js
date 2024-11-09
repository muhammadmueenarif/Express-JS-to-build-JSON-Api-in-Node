const books = [ 
    {
        "id":'1',
        "title": 'Book 1',
        "author": 'Author 1'
    }, 
    {
        "id":'2',
        "title": 'Book 2',
        "author": 'Author 2'
    },
    {
        "id":'3',
        "title": 'Book 3',
        "author": 'Author 3'
    }
]; //consider this as a database.

//we have used module.exports before this we use module.export = { findAll }; at the end
// and simply write function. 
module.exports = {
    findAll() {
        return books;
    },
    findOne(id) {
        return books.find(book => book.id === id);
    }
};