/**
 * view-helper.js - some usefull functions to use in view objects
 */

/**
 * buildFooterRow() - returns string with footer
 *  - columns - array of columns titles
 */
function buildFooterRow(columns) {
  var row = '';
  for(var i = 0; i < columns.length; i++)
    row = row + '<td><b>' + columns[i] + '</b></td>';
  return row;
}

/**
 * buildDataTablesColumnsArray() - returns array for DataTables
 *  - columns - array of columns titles
 *  - datas - array of data for columns
 */
function buildDataTablesColumnsArray(columns, datas) {
  var arr = [];
  for(var i = 0; i < columns.length; i++)
    arr.push( { title: columns[i], data: datas[i], render: denuller });
  return arr;
}

