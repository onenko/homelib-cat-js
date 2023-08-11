/*
* lcbcf-helper.js - all things related to LCBCF - Library Catalogue Backup CSV File
*/
const HOMELIB_CAT_VERSION = '0.12';
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
  for (const [id, record] of dataMap) {
    result = result + record2csv(columnsArray, record);
  }
  return result;
}

function dataList2csv(columnsArray, dataList) {
  let result = '';
  for (const record of dataList) {
    result = result + record2csv(columnsArray, record);
  }
  return result;
}

async function readTextFileA(file, drivers) {
  const stream = await file.readableStream.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { value, done } = await stream.read();
    if (done) {
      break;
    }

    const chunk = decoder.decode(value, { stream: true });
    const lines = chunk.split(/\r\n|\n/);

    // Process each line separately
    for (const line of lines) {
      console.log('line:' + line);
    }
  }
  stream.releaseLock();
}

const changeStatus = (status) => {
  console.log("status:" + status);
}

async function readTextFile(file, drivers) {
  const fr = new FileReader();
  fr.readAsText(file);
  fr.addEventListener('loadstart', changeStatus('Start Loading'));
//  fr.addEventListener('load', parse(fr));
  fr.addEventListener('loadend', changeStatus('loadend'));
  fr.addEventListener('progress', changeStatus('progress'));
  fr.addEventListener('error', changeStatus('error'));
  fr.addEventListener('abort', changeStatus('Interrupted'));
  fr.onload = function() {
    console.log('reader.result:' + fr.result);
    parseStringWithLCBCF(fr.result, drivers);
  };
}

function parseStringWithLCBCF(lcbcf, drivers) {
  drivers.CYCLES.clean();
  drivers.BOOKS.clean();
  drivers.ARTS.clean();
  drivers.BOOKSARTS.clean();
  drivers.PERSONS.clean();
  drivers.AUTHORS.clean();
  drivers.NOTES.clean();

  const lines = lcbcf.split(/\r\n|\n/);
  let driver = null;

  lines.shift();    // TODO: process 1st line

  for (const line of lines) {
    if(line.charAt(0) == '#') {
      const driverName = line.substr(1);
      driver = drivers[driverName];
      if(!driver) {
        console.log("ERROR while parsing input file: section name " + line + " not recognized. Import aborted.");
        return;
      }
    } else {
      if(line.length > 0) {
        driver.load(line);
      }
    }
    console.log('line:' + line);
  }

    $('#tbl').DataTable().destroy();
    ViewMain.initTable(drivers);


//  ViewMain.refreshTable(drivers);
//  $("#tbl").DataTable().draw(false);
}





//async function parse(fr) {
//  console.log("fr: " + fr.result);
//}
