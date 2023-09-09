/*
* table-books-driver-csv.js
*
* Driver to access data table "BOOKS", rows are in the CSV format and embedded in 'table-books-data-csv.js'
*/
const BOOKS_data_columns_array = ['Id', 'Author', 'Title', 'Year', 'Publisher', 'Ln', 'Type', 'Size', 'Props', 'Image',
    'Loc', 'Time', 'Flags', 'User', 'Collection', 'CollectionNum' ];

const BOOKS_driver_csv = {

  map: new Map(),

  init: function() {
    BOOKS_data_csv.forEach(this.load, this);
  },

  clean: function() {
    this.map = new Map();
  },

  addBook: function(book) {
    this.map.set(book.Id, book);
  },

  load: function(line) {
    const COL_COUNT = BOOKS_data_columns_array.length;
    const columns = line.split('`');
    if(columns.length != COL_COUNT) {
      const errInfo = "(parsed " + columns.length + " columns, expected " + COL_COUNT + ")";
      console.log("ERROR in BOOKS data " + errInfo + ", line " + i + ": " + line);
    } else {
      let book = new Object();
      for(let col = 0; col < COL_COUNT; col++) {
          book[BOOKS_data_columns_array[col]] = columns[col];
      }
      this.map.set(columns[0], book);
    }
  },

  save: function() {
    return dataMap2csv(BOOKS_data_columns_array, this.map);
  },

  count: function() {
    return this.map.size;
  },

  /*
  * returns [[Book1.Id, Book1],[Book2.Id, Book2], [Book3.Id, Book3] ...]
  */
  getFiltered: function(filter) {
    return Array.from(this.map.entries());
  },

  /*
  * return Book object or null if not found
  */
  getById: function(id) {
    return this.map.get(id);
  }

};
