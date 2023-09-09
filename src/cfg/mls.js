
var MLS_dataTableLanguageUrl;
var MLS_ERR_Prefix;
var MLS_AddBook_OK;

function updateLanguage(lang, drivers) {
    var mls = {};
    if (lang === 'en') {
        mls = mls_en;
        MLS_dataTableLanguageUrl = '//cdn.datatables.net/plug-ins/1.13.6/i18n/en-GB.json';
        MLS_ERR_Prefix = 'ERROR: ';
        MLS_AddBook_OK = "New book added successfully.";
    } else if (lang === 'uk') {
        mls = mls_uk;
        MLS_dataTableLanguageUrl = '//cdn.datatables.net/plug-ins/1.13.6/i18n/uk.json';
        MLS_ERR_Prefix = 'ПОМИЛКА: ';
        MLS_AddBook_OK = "Нова книга успішно додана.";
    }

    $('h1').text(mls.title + ' ' + cfg.version);
    $('#select-lang').text(mls.selectLanguage);

    $('#label-for-author1').text(mls.labelForAuthor1);
    $('#label-for-title1').text(mls.labelForTitle1);
    $('#label-for-publisher1').text(mls.labelForPublisher1);
    $('#label-for-publ-year1').text(mls.labelForPublYear1);
    $('#label-for-book-lang1').text(mls.labelForBookLang1);
    $('#label-for-book-type1').text(mls.labelForBookType1);
    $('#label-for-book-size1').text(mls.labelForBookSize1);
    $('#label-for-book-isbn1').text(mls.labelForBookIsbn1);
//    $('#label-for-art-year1').text(mls.labelForArtYear1);
//    $('#label-for-art-lang1').text(mls.labelForArtLang1);
    $('#add-book-submit').text(mls.addBookSubmit);

    // here we should recreate DataTables with language: url:
/*    if(drivers) {
        ViewMain.refreshTable(drivers);
    }*/
};
