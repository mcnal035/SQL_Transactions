# Books with Tags

A book list application which allows books to be tagged with one or more genres. 

## Objectives

- Use RETURNING to get back the id of a new database row
- Use SQL Transactions to insert rows into a database table
- Practice working with M-M relationships in SQL

## Setup Database

Create a new Postgres database called `books-sqltrans`. 

Run the included `database.sql` file to create the necessary tables and insert some starter data.

## Run the App

- `npm install`
- `npm run server`
- `npm run client`

You should see a list of books, some of which will have tags. 

There is a link at the top to Add Book. The form will allow you to add a new book. If you check the server log, you will see that the selected tags are sent to the server, but they are not saved to the database.  

## Requirements 

Your task is to update the code in the `book.router.js` file to save the tag information when adding a new book. There are 3 TODO comments in the code to help you do this. 

## Stretch

### Delete a Book

Add a delete button to the table that will allow a book and its associated tags to be deleted. 

### Edit a Book

Review the client code for the `BookForm`. Explore the Material UI [Select](https://v3.material-ui.com/demos/selects/#multiple-select) component that is used to allow the selection of multiple tags. 

Add an edit button to the table that will allow a book to be updated. Use a [Material UI Dialog](https://v3.material-ui.com/demos/selects/#with-a-dialog) for the edit. Start by allowing just the title and author to be updated. 

Once that is working, add the update for the tags. How will that be different than adding the tags for a new book?

