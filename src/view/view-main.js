/* support table content for the Main view of table
*
* Table DOM id is #tbl
*/
var ViewMain = {

  columns_titles: ['Author', 'Title', 'PubY', 'Ln', 'Id', 'Publisher', 'Original Title', 'Year', 'Typ', 'Size', 'Props', 'Loc', 'Flags' ],
  columns_datas: ['Author', 'Title', 'PubY', 'PubLn', 'BookId', 'Publisher', 'OrigTitle', 'CreY', 'Typ', 'Size', 'Props', 'Loc', 'Flags' ],
  view_filter: null,

  init: function(drivers) {
    drivers.BOOKS.init();
    drivers.ARTS.init();
    drivers.BOOKSARTS.init();
    drivers.PERSONS.init();
    drivers.AUTHORS.init();
  },

  initTable: function(drivers) {
    var footTr = $("#tbl").find('#tfoot-tr');
    footTr[0].innerHTML = buildFooterRow(this.columns_titles);
    var columnsArray = buildDataTablesColumnsArray(this.columns_titles, this.columns_datas);

    $('#tbl').DataTable( {
//          ajax: "/ajaxForTable",
          bPaginate: false,
          data: this.select(this.view_filter, drivers),
          columns: columnsArray
//          columns: [
//              { title: "Author", data: "Author", render: denuller },
//              { title: "Title", data: "Title", render: denuller },
//              { title: "PubY", data: "PubY", render: denuller },
//              { title: "Ln", data: "PubLn", render: denuller },
//              { title: "Id", data: "BookId", render: denuller },
//              { title: "Publisher", data: "Publisher", render: denuller },
//              { title: "Typ", data: "Typ", render: denuller },
//              { title: "Size", data: "Size", render: denuller },
//              { title: "Props", data: "Props", render: denuller },
//              { title: "Loc", data: "Loc", render: denuller },
//              { title: "Flags", data: "Flags", render: denuller }

//              { title: "Orig Author", data: "OAuthor", render: denuller },
//              { title: "Orig Title", data: "OTitle", render: denuller },
//              { title: "Year", data: "Year", render: denuller },
//              { title: "Ln", data: "LN", render: denuller },
//              { title: "Description", data: "Descr", render: denuller }
//          ]
      } );
  },

  select: function(filter, drivers) {
    let rows = drivers.BOOKS.getFiltered(filter);
    var lines = [];
    for(let i = 0; i < rows.length; i++) {
      const book = rows[i][1];  // [0] key: Book.Id, [1] value: Book
      var line = new Object();

      let arts = BOOKSARTS_driver_csv.getByBookId(book.Id);
      if(arts.length > 0) {
        let art = ARTS_driver_csv.getById(arts[0]);
        if(art != null) {
          // Just 2 columns in Main View
          line.OrigTitle = art.Title;
          line.CreY = art.Year;
          this.updateBookByArt(book, art);
        }
      }

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
  },

  /*
  * If Book has references in the Author, title or Year, resolve it through crossreferenced Art object
  */
  updateBookByArt: function(book, art) {
    if('@' == book.Title) {
      book.Title = art.Title;
    }
    if('@' == book.Author) {
      let authors = ARTS_driver_csv.getPersonNamesOfArt(art.Id);
      book.Author = authors.join('; ');
    }
    if('@' == book.Year) {
      book.Year = art.Year;
    }
  }

}