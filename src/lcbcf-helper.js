/*
* lcbcf-helper.js - all things related to LCBCF - Library Catalogue Backup CSV File
*/
const HOMELIB_CAT_VERSION = '0.11';
const LCBCF_VERSION = '1.00';
/**
 * lcbcf_count_lines()
 *
 * Calculate expected number of lines to write, header not included
 */
function lcbcf_count_lines(drivers) {
  let result = 1 + drivers.CYCLES.count();
  result = result + 1 + drivers.BOOKS.count();
  result = result + 1 + drivers.ARTS.count();
  result = result + 1 + drivers.BOOKSARTS.count();
  result = result + 1 + drivers.PERSONS.count();
  result = result + 1 + drivers.AUTHORS.count();
  result = result + 1 + drivers.NOTES.count();
  return result;
}

/*
* Generates string with header record, including LF
*
* Format of header: LCBCF`v1.0`230927140357`1554
*/
function generate_header(drivers) {
  const ts = curr_date_YYMMDDhhmmss();
  const lines = lcbcf_count_lines(drivers);
  return 'LCBCF`' + LCBCF_VERSION + '`' + ts + '`' + lines + '\n';
}

function generate_lcbcf_content(drivers) {
  let result = generate_header(drivers);
  result = result + '#CYCLES\n' + drivers.CYCLES.save();
  result = result + '#BOOKS\n' + drivers.BOOKS.save();
  result = result + '#ARTS\n' + drivers.ARTS.save();
  result = result + '#BOOKSARTS\n' + drivers.BOOKSARTS.save();
  result = result + '#PERSONS\n' + drivers.PERSONS.save();
  result = result + '#AUTHORS\n' + drivers.AUTHORS.save();
  result = result + '#NOTES\n' + drivers.NOTES.save();
  return result;
}

function record2csv(columnsArray, record) {
  const COL_COUNT = columnsArray.length;
  let result = '';
  for(let col = 0; col < COL_COUNT; col++) {
    field = record[columnsArray[col]];
    if( ! field) {
      field = '';
    }
    separator = col < (COL_COUNT - 1) ? '`' : '\n';
    result = result + field + separator;
  }
  return result;
}

function dataMap2csv(columnsArray, dataMap) {
  let result = '';
  for (const [id, record] of this.map) {
    result = result + record2csv(columnsArray, record);
  }
  return result;
}

function dataList2csv(columnsArray, dataList) {
  let result = '';
  for (const record in dataList) {
    result = result + record2csv(columnsArray, record);
  }
  return result;
}
