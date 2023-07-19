/*
* table-books-data-csv.js
*
* This file contains CSV content with rows of BOOKS database table
*
Id - unique identifier of a book, typically ISBN or manually constructed unique string
Author - author of the book; in most of books it is the same as the author of contained piece of art, but may be different; for example, author may be the guy, who edited and published the collection of short stories.
Title - title of the book; if this is multivolume edition, then the volume should be included in the title, in the way, that allows proper sorting;
Year - publishing year
Publisher - the name of the publisher
Ln - 2 chars language code, for example, “en”
Type - type of the book - pbb - paper back  book, hcb - hard cover book, fb2, mp3, zfb2, mobi, lit
Size - pages count or kilobytes of ebook, or megabytes of audiobook
Props - extra properties, for example, bitrate of audiobook
Image - link or encoded image of this art, to be defined later
Location - free format string to define, where the book is located; may be the code of a shelf
Time - if set, defines last date when this book should be returned to owner, if this book was taken by some person, defined in location field;
Flags - marks for filter, i. E. book completed (read)
User - user id, to filter out books, belonging to a specific user in multiuser database.
Collection - reference to id in CYCLES table if this book belongs to some collection, or empty otherwise
CollectionNum - number of this book in the collection; this should be number field.
*/
const BOOKS_data_csv = [
"Кідрук~Макс~Бот`Кідрук, Макс`Бот`2008``uk`fb2`3550`````DONE```",
"Кідрук~Макс~Бот2`@`@`2015``uk`fb2`2990`````DONE```",
"Коэльо~П~Алхимик`Коэльо, Пауло`Алхимик`1989`Publisher`ru`hcb`89````````",
"978-0-00-731208-5`@`@`@`Harper Collins`en`hcb`410```Nicaragua9`````",
"978-5-04-155250-3`@`@`2021`Эксмо`ru`hcb`384`````TEST```",
"Д4703000000-528-83`Дюма Александр`Граф Монте-Кристо, Т. I`1983`Издательство \"Правда\"`ru`hcb`704```ShelfCab``DONE``Граф-Монте-Кристо:col`1",
"Д4703000000-529-83`Дюма Александр`Граф Монте-Кристо, Т. II`1983`Издательство \"Правда\"`ru`hcb`640```ShelfCab``DONE``Граф-Монте-Кристо:col`2"
];

/* RESERVED
"978-0-00-731208-5`Bushnell, Candace`Summer and the City`2011`Harper Collins`en`hcb`410```Nicaragua9``"
"978-5-04-155250-3`Ильф и Петров`Золотой теленок`2021`Эксмо`ru`hcb`384`````TEST"

"Дюма:ГрафМонтеКристо:a`Граф Монте-Кристо`1977`ru`T`"

*/
