/*
* table-persons-driver-csv.js
*
* Driver to access data table "PERSONS", rows are in the CSV format and embedded in 'table-persons-data-csv.js'
*/
const PERSONS_driver_csv = {

  map: new Map(),

  init: function() {
    const COL_COUNT = PERSONS_data_columns_array.length;
    for (var i = 0; i < PERSONS_data_csv.length; i++) {
      const columns = PERSONS_data_csv[i].split('`');
      if(columns.length != COL_COUNT) {
        console.log("ERROR in PERSONS data, line " + i + ": " + PERSONS_data_csv[i]);
      } else {
        var person = new Object();
        for(var col = 0; col < COL_COUNT; col++) {
            person[PERSONS_data_columns_array[col]] = columns[col];
        }
        this.map.set(columns[0], person);
      }
    }
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
