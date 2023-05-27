/*
* table-books-driver-csv.js
*
* Driver to access data table "BOOKS", rows are in the CSV format and embedded in 'table-books-data-csv.js'
*/
const BOOKS_driver_csv = {

  map: new Map(),

  init: function() {
    for (var i = 0; i < BOOKS_data_csv.length; i++) {
      const columns = BOOKS_data_csv[i].split('`');
      if(columns.length != 13) {
        console.log("ERROR in BOOKS data, line " + i + ": " + BOOKS_data_csv[i]);
      } else {
        var book = new Object();
        for(var col = 0; col < 13; col++) {
            book[BOOKS_data_columns_array[col]] = columns[col];
        }
        this.map.set(columns[0], book);
      }
    }
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
