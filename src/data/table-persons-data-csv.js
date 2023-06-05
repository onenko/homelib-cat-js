/*
* table-persons-data-csv.js
*
* This file contains CSV content with rows of PERSONS database table
*
Id - created manually from author name and last name, etc.
Name - name of the author, for example, Coelho, Paulo
Type - who is he - writer, translator, or artist of reading (O/T/R)
Born - year of birth
Died - empty if alive, ? if unknown, or year of death
*/
const PERSONS_data_columns_array = ['Id', 'Name', 'Born', 'Died', 'Type' ];

const PERSONS_data_csv = [
"Кідрук~Макс:p`Кідрук, Макс`?``O",
"Coelho~Paulo:p`Coelho, Paulo`1947``O",
"Bushnell~Candace:p`Bushnell, Candace`?``O",
"Ilf~Ilya:p`Ильф, Илья`1897`1937`O",
"Petrov~Evgeniy:p`Петров, Евгений`1903`1942`O"
];

// Ильф Илья Арнольдович
//Петров Евгений Петрович