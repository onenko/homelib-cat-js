/*
* table-authors-driver-csv.js
*
* Driver to access data table "AUTHORS", rows are in the CSV format and embedded in 'table-authors-data-csv.js'
*
* TODO: implement some faster algorithm to retrieve data, i. e. sort the list for one way search, and create
*   map of lists for reverse search, or ask ChatGPT how to best implement many-to-many relation in memory in JS
*/
const AUTHORS_data_columns_array = ['ArtId', 'PersonId', 'Role' ];

const AUTHORS_driver_csv = {

  list: [],

  init: function() {
    AUTHORS_data_csv.forEach(this.load, this);
  },

  load: function(line) {
    const COL_COUNT = AUTHORS_data_columns_array.length;
    const columns = line.split('`');
    if(columns.length != COL_COUNT) {
      const errInfo = "(parsed " + columns.length + " columns, expected " + COL_COUNT + ")";
      console.log("ERROR in AUTHORS data " + errInfo + ", line " + i + ": " + line);
    } else {
      let author = new Object();
      for(let col = 0; col < COL_COUNT; col++) {
        author[AUTHORS_data_columns_array[col]] = columns[col];
      }
      this.list.push(author);
    }
  },

  save: function() {
    const COL_COUNT = AUTHORS_data_columns_array.length;
    let result = '';
    for (const record in this.list) {
      for(let col = 0; col < COL_COUNT; col++) {
        field = record[AUTHORS_data_columns_array[col]];
        if( ! field) {
          field = '';
        }
        separator = col < (COL_COUNT - 1) ? '`' : '\n';
        result = result + field + separator;
      }
    }
    return result;
  },

  count: function() {
    return this.list.length;
  },

  /*
  * return array of ArtId's related to an PersonId, or empty array if not found
  */
  getByPersonId: function(personId) {
    var arts = [];
    for(var i = 0; i < this.list.length; i ++) {
      if(this.list[i].PersonId == personId) {
        arts.push(this.list[i].ArtId);
      }
    }
    return arts;
  },

  /*
  * return array of PersonIds related to an ArtId, or empty array if not found
  * this list should be sorted by 'Role' field
  */
  getByArtId: function(artId) {
    const selectedRecords = this.list.filter(record => record.ArtId == artId);
    const personsSorted = selectedRecords.sort((a,b) => (a.Role > b.Role) ? 1 : ((b.Role > a.Role) ? -1 : 0));
    return personsSorted.map(person => person.PersonId);
  }

};
