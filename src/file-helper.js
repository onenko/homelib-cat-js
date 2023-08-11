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

function writeStringToClientFile(data, fileName) {
    var blob = new Blob([data], { type: 'text/plain' });
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
}

async function writeStringToClientFile2(data1, data2) {
  try {
    // Request permission to access the file system and choose a file
    const [fileHandle] = await window.showOpenFilePicker();

    // Create a writable stream to the selected file
    const writableStream = await fileHandle.createWritable();

    // Write the data to the file
    await writableStream.write(data1);
    await writableStream.write(data2);

    // Close the writable stream
    await writableStream.close();

    alert('File saved successfully!');
  } catch (error) {
    console.error('Error:', error);
  }
}

async function openFileForRead(drivers) {
  let file = null;
  try {
    const [fileHandle] = await window.showOpenFilePicker();
    file = await fileHandle.getFile();
    readTextFile(file, drivers);
  } catch (err) {
    console.error(err);
  }
  return file;
}
