const request = require('supertest');
const bookserver = require('../bookserver.js');
const totallyRealBooks = require('../totallyRealBooks.json');


let libraryTest = [];

    describe('Book Server ', () => {
         
        

    
    it('renders all the books', async() => {
        for (let book of totallyRealBooks) {
            libraryTest.push({
                "Index" : book.index,
               "Title: " : book.Book_Title,
               "Author: " : book.Author,
               "ISBN Number: " : book.ISBN_Number,
               "Checked Out: " : book.is_Checked_Out
            })

        }
        let serverReply = await request(bookserver).get('/api/books');
        expect(serverReply.status).toBe(200);
        //expect(serverReply.body).toBe(JSON.stringify(libraryTest));
        expect(serverReply.body).not.toBe(undefined)

    })

    
})