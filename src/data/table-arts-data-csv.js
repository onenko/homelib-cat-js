/*
* table-arts-data-csv.js
*
* This file contains CSV content with rows of ARTS database table
*
* NOTE: Author column is missing from this table, as covering the use case with several authors,
*   we keep authors references through Authors collection (AUTHORS table)
*
Id - unique identifier of an art, typically manually constructed from author id and some unique suffix
Title - title of the art - in original language or the language of the translation;
Year - creation year
Ln - 2 chars language code, for example, “en”
Type - type of the art - SS/LS/N/C/T/R:
 SS - Short Story (оповідання/рассказ)
 LS - Long Story (повість/повесть)
 N - Novel (Роман)
 C - Comics (Графічний роман/Графический роман)
 T - Translation of the above Arts to another language
 R - Reading of above SS/LS/N/T to audiobook
Ref - reference to the origin of this art, to the original art of this translation or audioread,
  or the id of translation used as base for this audioread;
  so records of this table reference another records in this table.
*/
const ARTS_data_columns_array = ['Id', 'Title', 'Year', 'Ln', 'Type', 'Ref' ];

const ARTS_data_csv = [
"Кідрук:Бот:a`Бот`2008`uk`N`",
"Кідрук:Бот2:a`Бот:Гуаякільський синдром`2015`uk`N`",
"Coelho:O~Alquimista:a`O Alquimista`1988`pt`N`",
"Bushnell:Summer~and~the~City:a`Summer and the City`2011`en`N`",
"Ilf:Petrov:Zolotoy~telenok:a`Золотой теленок`1931`ru`N`"
];
