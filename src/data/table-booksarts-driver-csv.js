/*
* table-booksarts-driver-csv.js
*
* Driver to access data table "BOOKARTS", rows are in the CSV format and embedded in 'table-booksarts-data-csv.js'
*
* TODO: implement some faster algorithm to retrieve data, i. e. sort the list for one way search, and create
*   map of lists for reverse search, or ask ChatGPT how to best implement many-to-many relation in memory in JS
*/
const BOOKSARTS_data_columns_array = ['ArtId', 'BookId' ];

const BOOKSARTS_driver_csv = {

  list: [],

  init: function() {
    BOOKSARTS_data_csv.forEach(this.load, this);
  },

  clean: function() {
    this.list = [];
  },

  load: function(line) {
    const COL_COUNT = BOOKSARTS_data_columns_array.length;
    const columns = line.split('`');
      if(columns.length != COL_COUNT) {
      const errInfo = "(parsed " + columns.length + " columns, expected " + COL_COUNT + ")";
      console.log("ERROR in BOOKSARTS data " + errInfo + ", line " + i + ": " + line);
    } else {
      let bookart = new Object();
      for(let col = 0; col < COL_COUNT; col++) {
        bookart[BOOKSARTS_data_columns_array[col]] = columns[col];
      }
      this.list.push(bookart);
    }
  },

  save: function() {
    return dataList2csv(BOOKSARTS_data_columns_array, this.list);
  },

  count: function() {
    return this.list.length;
  },

  /*
  * return array of Book objects related to an ArtId, or empty array if not found
  */
  getByArtId: function(artId) {
    var books = [];
    for(var i = 0; i < this.list.length; i ++) {
      if(this.list[i].ArtId == artId) {
        books.push(this.list[i].BooksId);
      }
    }
    return books;
  },

  /*
  * return array of Art objects related to an BookId, or empty array if not found
  */
  getByBookId: function(bookId) {
    var arts = [];
    for(var i = 0; i < this.list.length; i ++) {
      if(this.list[i].BookId == bookId) {
        arts.push(this.list[i].ArtId);
      }
    }
    return arts;
  }


};
