/*
* data-for-view-main.js
*
* Generate data array for the MAIN view for DataTables
*/
var aDemoItems =

[{
  Author: "Кідрук, Макс",
  Title: "Бот",
  PubY: 2008,
  PubLn: "uk",
  Typ: "fb2",
  Size: 2345,
  OAuthor: "",
  OTitle: "",
  Year: 2008,
  LN: "uk",
  Flags: "",
  Descr: "Перша книга з ботівської дилогії"
},{
  Author: "Коэльо, Пауло",
  Title: "Алхимик",
  PubY: 1988,
  PubLn: "ru",
  Typ: "fb2",
  Size: 334,
  OAuthor: "Coelho, Paulo",
  OTitle: "O Alquimista",
  Year: 1988,
  LN: "pt",
  Flags: "",
  Descr: "Самый известный роман писателя"
} ];

function getDataForViewMain() {
  return aDemoItems;
}


