/*
* db-facade.js
*
* API to operate with DB of HLC
*/

const HLC_DB_Facade = {
  drivers: null,

  errDuplicateBookId: "Book with given Id already exist in DB",


  init: function(drivers) {
    this.drivers = drivers;
  },

  /**
  * simple case - add book with one novel, published in original language
  *
  * returns string, if null - OK, otherwise it contains the description of the error
  */
  addBook: function(formData) {
    // Check for duplicate bookId
    if(this.drivers.BOOKS.getById(formData.bookId)) {
      return errDuplicateBookId;
    }
    let book = new Object();
    book['Id'] = formData.bookId;
    book['Author'] = formData.author;
    book['Title'] = formData.title;
    book['Year'] = formData.pubY;
    book['Publisher'] = formData.publisher;
    book['Ln'] = formData.pubLn;
    book['Type'] = formData.typ;
    book['Size'] = formData.size;
    book['Props'] = '';
    book['Image'] = '';
    book['Loc'] = '';
    book['Time'] = '';
    book['Flags'] = '';
    book['User'] = '';
    book['Collection'] = '';
    book['CollectionNum'] = '';
    this.drivers.BOOKS.addBook(book);
    return null;
  }

};

