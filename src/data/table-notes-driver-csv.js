/*
* table-notes-driver-csv.js
*
* Driver to access data table "NOTES", rows are in the CSV format and embedded in 'table-notes-data-csv.js'
*
* NOTE: as 'Id' does not uniquely identify exact note, lets keep data in the map of lists
*/
const NOTES_data_columns_array = ['Type', 'Id', 'Ln', 'Ts', 'Text' ];

const NOTES_driver_csv = {

  map: new Map(),

  init: function() {
    NOTES_data_csv.forEach(this.load, this);
  },

  load: function(line) {
    const COL_COUNT = NOTES_data_columns_array.length;
    const columns = line.split('`');
    if(columns.length != COL_COUNT) {
      const errInfo = "(parsed " + columns.length + " columns, expected " + COL_COUNT + ")";
      console.log("ERROR in NOTES data " + errInfo + ", line " + i + ": " + line);
    } else {
      let note = new Object();
      for(let col = 0; col < COL_COUNT; col++) {
        note[NOTES_data_columns_array[col]] = columns[col];
      }
      this.addToMap(note);
    }
  },

  save: function() {
    const COL_COUNT = NOTES_data_columns_array.length;
    let result = '';
    for (const [id, note] of this.map) {
      for(let col = 0; col < COL_COUNT; col++) {
        field = note[NOTES_data_columns_array[col]];
        if( ! field) {
          field = '';
        }
        separator = col < (COL_COUNT - 1) ? '`' : '\n';
        result = result + field + separator;
      }
    }
    return result;
  },

  addToMap: function(note) {
    let notes = this.map.get(note.Id);
    if( ! notes) {
      notes = [note];
      this.map.set(note.Id, notes);
    } else {
      for(let i = 0; i < notes.length; i++) {
        item = notes[i];
        if(item.Type === note.Type && item.Ln === note.Ln) {
          if(item.Text === note.Text) {
            item.Ts = note.Ts;
            return;
          } else {
            if(item.Ts === note.Ts) {
              item.Text = note.Text;
              return;
            }
          }
        }
      }
      notes.push(note);
    }
  },

  count: function() {
    let counter = 0;
    for (const [id, notes] of this.map) {
      counter = counter + notes.length;
    }
    return counter;
  },

  /*
  * returns [[note1.Id, notes1list],[note2.Id, notes2list], [note3.Id, notes3list] ...]
  */
  getFiltered: function(filter) {
    return Array.from(this.map.entries());
  },

  /*
  * return list of Note objects or null if not found
  */
  getById: function(id) {
    return this.map.get(id);
  },

  /*
  * return list of Note objects for given language or null if not found
  */
  getByIdAndLn: function(id, language) {
    let result = [];
    let notes = this.map.get(id);
    if(notes) {
      for(let note in notes) {
        if(note.Ln === language) {
          result.push(note);
        }
      }
    }
    return result
  }

};
