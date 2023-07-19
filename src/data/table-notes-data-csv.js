/*
* table-notes-data-csv.js
*
* This file contains CSV content with rows of NOTES database table with text blocks (comments)
*
* Fields
* Type -  one character type of an object, which is owner of this note - B (book) A(art) P(person)
* Id - id of art, or book, or person
* Ln - language of a note
* Ts - timestamp of this note (ms)
* Text - note text
*
* So we can have several records with Type=P, id=CoelhoP, Ln=”sp” - which contain the biography of Paulo Coelho, and they differ by timestamps.
*/

const NOTES_data_csv = [
"A`Кідрук:Бот:a`uk`0`Український програміст їде у відрядження в чилійську пустелю Атакама на секретний об'єкт, щоб запобігти техногенній катастрофі. Історія замішана на програмуванні і наноботах. Технотриллер, коротше кажучи.",
"P`Coelho~Paulo:p`uk`0`Пауло Коельо - відомий бразильський письменник, народився 24 серпня 1947 року в Ріо-де-Жанейро. Сама відома книга - \"Алхімік\"/O Alquimista, 1988 рік. В цей час ПК живе в Бразилії та Франції."
];

