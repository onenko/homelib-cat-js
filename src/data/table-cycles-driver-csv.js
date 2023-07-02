/*
* table-cycles-driver-csv.js
*
* Driver to access data table "CYCLES", rows are in the CSV format and embedded in 'table-cycles-data-csv.js'
*/
const CYCLES_driver_csv = {

  map: new Map(),

  init: function() {
    const COL_COUNT = CYCLES_data_columns_array.length;
    for (var i = 0; i < CYCLES_data_csv.length; i++) {
      const columns = CYCLES_data_csv[i].split('`');
      if(columns.length != COL_COUNT) {
        console.log("ERROR in CYCLES data, line " + i + ": " + CYCLES_data_csv[i]);
      } else {
        var cycle = new Object();
        for(var col = 0; col < COL_COUNT; col++) {
            cycle[CYCLES_data_columns_array[col]] = columns[col];
        }
        this.map.set(columns[0], cycle);
      }
    }
  },

  /*
  * returns [[cycle1.Id, cycle1],[cycle2.Id, cycle2], [cycle3.Id, cycle3] ...]
  */
  getFiltered: function(filter) {
    return Array.from(this.map.entries());
  },

  /*
  * return Cycle object or null if not found
  */
  getById: function(id) {
    return this.map.get(id);
  },

};
