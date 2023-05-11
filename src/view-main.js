/* support table content for the Main view of table
*
* Table DOM id is #tbl
*/
var ViewMain = {
  initTable: function() {
    var footTr = $("#tbl").find('#tfoot-tr');
<!--    if (!foot.length) foot = $('<tfoot id="tfoot">').appendTo("#tbl");-->
<!--    foot.append($('<td><b>Author</b></td><td>Title</td><td>PubY</td><td><b>Ln</b></td><td>Typ</td><td>Size</td><td><b>Orig Author</b></td><td>Orig Title</td><td>Year</td><td><b>Ln</b></td><td>Flags</td><td>Description</td>'));-->
    footTr[0].innerHTML = '<td><b>Author</b></td><td>Title</td><td>PubY</td><td><b>Ln</b></td><td>Typ</td><td>Size</td><td><b>Orig Author</b></td><td>Orig Title</td><td>Year</td><td><b>Ln</b></td><td>Flags</td><td>Description</td>';

    $('#tbl').DataTable( {
//          ajax: "/ajaxForTable",
          bPaginate: false,
          data: getDataForViewMain(),
          columns: [
              { title: "Author", data: "Author", render: denuller },
              { title: "Title", data: "Title", render: denuller },
              { title: "PubY", data: "PubY", render: denuller },
              { title: "Ln", data: "PubLn", render: denuller },
              { title: "Typ", data: "Typ", render: denuller },
              { title: "Size", data: "Size", render: denuller },
              { title: "Orig Author", data: "OAuthor", render: denuller },
              { title: "Orig Title", data: "OTitle", render: denuller },
              { title: "Year", data: "Year", render: denuller },
              { title: "Ln", data: "LN", render: denuller },
              { title: "Flags", data: "Flags", render: denuller },
              { title: "Description", data: "Descr", render: denuller }
          ]
      } );
    }

}