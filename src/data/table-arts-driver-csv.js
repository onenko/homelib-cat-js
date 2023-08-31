/*
* table-arts-driver-csv.js
*
* Driver to access data table "ARTS", rows are in the CSV format and embedded in 'table-arts-data-csv.js'
*/
const ARTS_data_columns_array = ['Id', 'Title', 'Year', 'Ln', 'Type', 'Genre', 'Ref', 'Cycle', 'CycleNum' ];

const ARTS_driver_csv = {

  map: new Map(),

  init: function() {
    ARTS_data_csv.forEach(this.load, this);
  },

  clean: function() {
    this.map = new Map();
  },

  load: function(line) {
    const COL_COUNT = ARTS_data_columns_array.length;
    const columns = line.split('`');
    if(columns.length != COL_COUNT) {
      const errInfo = "(parsed " + columns.length + " columns, expected " + COL_COUNT + ")";
      console.log("ERROR in ARTS data " + errInfo + ", line " + i + ": " + line);
    } else {
      let art = new Object();
      for(let col = 0; col < COL_COUNT; col++) {
          art[ARTS_data_columns_array[col]] = columns[col];
      }
      this.map.set(columns[0], art);
    }
  },

  save: function() {
    return dataMap2csv(ARTS_data_columns_array, this.map);
  },

  count: function() {
    return this.map.size;
  },

  /*
  * returns [[art1.Id, art1],[art2.Id, art2], [art3.Id, art3] ...]
  */
  getFiltered: function(filter) {
    return Array.from(this.map.entries());
  },

  /*
  * return Art object or null if not found
  */
  getById: function(id) {
    return this.map.get(id);
  },

  /*
  * returns string array of person names, related to artId
  * The list is sorted by associated 'Role'
  getPersonNamesOfArt: function(artId) {
    let personIds = AUTHORS_driver_csv.getByArtId(artId);
    const persons = personIds.map(personId => PERSONS_driver_csv.getById(personId));
    const personsValid = persons.filter(person => person != null);
    return personsSorted.map(person => person.Name);
  }
  */

  /*
  * returns Persons as string array
  */
  getPersonNamesOfArt: function(artId) {
    let personIds = AUTHORS_driver_csv.getByArtId(artId);
    let authorNames = [];
    for(i = 0; i < personIds.length; i++) {
      let person = PERSONS_driver_csv.getById(personIds[i]);
      let name = 'N/A';
      if(person != null) {
         name = person.Name;
      }
      authorNames.push(name);
    }
    return authorNames;
  }

};

