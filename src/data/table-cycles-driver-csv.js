/*
* table-cycles-driver-csv.js
*
* Driver to access data table "CYCLES", rows are in the CSV format and embedded in 'table-cycles-data-csv.js'
*/
const CYCLES_data_columns_array = ['Id', 'Name', 'Publisher' ];

const CYCLES_driver_csv = {

  map: new Map(),

  init: function() {
    CYCLES_data_csv.forEach(this.load, this);
  },

  load: function(line) {
    const COL_COUNT = CYCLES_data_columns_array.length;
    const columns = line.split('`');
    if(columns.length != COL_COUNT) {
      const errInfo = "(parsed " + columns.length + " columns, expected " + COL_COUNT + ")";
      console.log("ERROR in CYCLES data " + errInfo + ", line " + i + ": " + line);
    } else {
      let cycle = new Object();
      for(let col = 0; col < COL_COUNT; col++) {
        cycle[CYCLES_data_columns_array[col]] = columns[col];
      }
      this.map.set(columns[0], cycle);
    }
  },

  count: function() {
    return map.size;
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
