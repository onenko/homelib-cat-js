/*
* table-persons-driver-csv.js
*
* Driver to access data table "PERSONS", rows are in the CSV format and embedded in 'table-persons-data-csv.js'
*/
const PERSONS_data_columns_array = ['Id', 'Name', 'Born', 'Died', 'Type' ];

const PERSONS_driver_csv = {

  map: new Map(),

  init: function() {
    PERSONS_data_csv.forEach(this.load, this);
  },

  clean: function() {
    this.map = new Map();
  },

  load: function(line) {
    const COL_COUNT = PERSONS_data_columns_array.length;
    const columns = line.split('`');
    if(columns.length != COL_COUNT) {
      const errInfo = "(parsed " + columns.length + " columns, expected " + COL_COUNT + ")";
      console.log("ERROR in PERSONS data " + errInfo + ", line " + i + ": " + line);
    } else {
      let person = new Object();
      for(let col = 0; col < COL_COUNT; col++) {
        person[PERSONS_data_columns_array[col]] = columns[col];
      }
      this.map.set(columns[0], person);
    }
  },

  save: function() {
    return dataMap2csv(PERSONS_data_columns_array, this.map);
  },

  count: function() {
    return this.map.size;
  },

  /*
  * returns [[person1.Id, person1],[person2.Id, person2], [person3.Id, person3] ...]
  */
  getFiltered: function(filter) {
    return Array.from(this.map.entries());
  },

  /*
  * return Person object or null if not found
  */
  getById: function(id) {
    return this.map.get(id);
  },

};
