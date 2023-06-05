/*
* table-authors-data-csv.js
*
* This file contains CSV content with rows of AUTHORS database table with cross-references
*
* Role - author (A), or translator (T), or reader (R ), or Pensiller (P), or Inker (I), or Writer (W).
*
* If an art has several authors/translators, they should be retrieved in the predefined order,
* which is coded as A0, A1, ...
*/
const AUTHORS_data_columns_array = ['ArtId', 'PersonId', 'Role' ];

const AUTHORS_data_csv = [
"Кідрук:Бот:a`Кідрук~Макс:p`A",
"Кідрук:Бот2:a`Кідрук~Макс:p`A",
"Coelho:O~Alquimista`Coelho~Paulo:p`A",
"Bushnell:Summer~and~the~City:a`Bushnell~Candace:p`A",
"Ilf:Petrov:Zolotoy~telenok:a`Ilf~Ilya:p`A0",
"Ilf:Petrov:Zolotoy~telenok:a`Petrov~Evgeniy:p`A1"
];
