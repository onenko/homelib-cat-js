/*
* table-books-data.js
*
* This file contains CSV content with rows of BOOKS database table
*
Id - unique identifier of a book, typically ISBN or manually constructed unique string
Author - author of the book; in most of books it is the same as the author of contained piece of art, but may be different; for example, author may be the guy, who edited and published the collection of short stories.
Title - title of the book; if this is multivolume edition, then the volume should be included in the title, in the way, that allows proper sorting;
Year - publishing year
Publisher - the name of the publisher
Ln - 2 chars language code, for example, “en”
Type - type of the book - pbb - paper back  book, hcb - hard cover book, fb2, mp3, zfb2, mobi, lit
Size - pages count or kilobytes of ebook, or megabytes of audiobook
Props - extra properties, for example, bitrate of audiobook
Image - link or encoded image of this art, to be defined later
Location - free format string to define, where the book is located; may be the code of a shelf
Time - if set, defines last date when this book should be returned to owner, if this book was taken by some person, defined in location field;
Flags - marks for filter, i. E. book completed (read)
*/
const BOOKS_data_columns_array = ['Id', 'Author', 'Title', 'Year', 'Publisher', 'Ln', 'Type', 'Size', 'Props', 'Image',
    'Loc', 'Time', 'Flags' ];

const BOOKS_data_array = [
"Кідрук~Макс~Бот`Кідрук, Макс`Бот`2008``uk`fb2`3550`````DONE",
"Коэльо~Пауло~Алхимик`Коэльо, Пауло`Алхимик`1988`Publisher`ru`hcb`89`````",
"978-0-00-731208-5`Bushnell, Candace`Summer and the City`2011`Harper Collins`en`hcb`410```Nicaragua9``"
];

const BOOKS_data = {
  map: new Map(),

  init: function() {
    for (var i = 0; i < BOOKS_data_array.length; i++) {
      const columns = BOOKS_data_array[i].split('`');
      if(columns.length != 13) {
        console.log("ERROR in BOOKS data, line " + i + ": " + BOOKS_data_array[i]);
      } else {
        var book = new Object();
        for(var col = 0; col < 13; col++) {
            book[BOOKS_data_columns_array[col]] = columns[col];
        }
        this.map.set(columns[0], book);
      }
    }
  },

  getFiltered: function(filter) {
    return Array.from(this.map.entries());
  },

  getById: function(id) {
    return this.map.get(id);
  }

};
