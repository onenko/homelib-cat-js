
function updateLanguage(lang) {
    var mls = {};
    if (lang === 'en') {
        mls = mls_en;
    } else if (lang === 'uk') {
        mls = mls_uk;
    }

    $('h1').text(mls.title + ' ' + cfg.version);
    $('#select-lang').text(mls.selectLanguage);
};
