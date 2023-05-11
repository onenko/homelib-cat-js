/*
* file-helper.js - support of file operations
*/




/* NOT COMPLETED */







/**
 * read_lines_and_process()
 *
 * Read all lines of text file, apply a function for each line
 */
function read_lines_and_process(file_name, processor) {
  console.time('Time');
  const fs = require('fs');
  const allContents = fs.readFileSync(file_name, 'utf-8');
  allContents.split(/\r?\n/).forEach((line) => {
    console.log('line: ', line);
    processor(line);
  });
  console.log(`Used ${process.memoryUsage().heapUsed / 1024 / 1024} MB`);
  console.timeEnd('Time');
}