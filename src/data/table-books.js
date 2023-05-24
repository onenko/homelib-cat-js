/*
* table-books.js
*
* API to access data table "BOOKS"
*
* In this implementation the data are stored directly inside JS file 'table-books-data.js'
*/
const BOOKS = {

  init: function() {
   BOOKS_data.init();
  },

  select: function(filter) {
    let rows = BOOKS_data.getFiltered(filter);
    var lines = [];
    for(let i = 0; i < rows.length; i++) {
      const book = rows[i][1];  // [0] key: Book.Id, [1] value: Book
      var line = new Object();
      line.Author = book.Author;
      line.Title = book.Title;
      line.PubY = book.Year;
      line.PubLn = book.Ln;
      line.BookId = book.Id;
      line.Publisher = book.Publisher;
      line.Typ = book.Type;
      line.Size = book.Size;
      line.Props = book.Props;
      line.Loc = book.Loc;
      line.Flags = book.Flags;
      lines.push(line);
    }
    return lines;
  }

}



