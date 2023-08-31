var UT = {
  LangHelperTest: function() {
      console.log("TEST 1 START");
      console.log(LangHelper.isValid("az"));
      console.log(LangHelper.isValid("ZZ"));
      console.log(LangHelper.isValid("uk"));
      console.log("TEST 1 END");
  },

  Table_BOOKS_data: function() {
      console.log("TEST 2 START");
      BOOKS_driver_csv.init();
      console.log(BOOKS_driver_csv.getById('978-0-00-731208-5'));
      console.log("TEST 2 END");
  },

  Table_NOTES_data: function() {
      console.log("TEST 3 START");
      NOTES_driver_csv.init();
      console.log(NOTES_driver_csv.getById('Кідрук:Бот:a'));
      console.log("TEST 3 END");
  },

  GenreHelperTest: function() {
      console.log("TEST 4 START");
      console.log(GenreHelper.isGenreValid("act"));
      console.log(GenreHelper.isGenreValid("sf-space"));
      console.log(GenreHelper.isGenreValid("zzz"));
      console.log(GenreHelper.isGenresStringValid("sfs/adv"));
      console.log(GenreHelper.isGenresStringValid("sfs/zzz"));
      console.log(GenreHelper.isGenresStringValid("s-f/spy/his"));
      console.log("TEST 4 END");
  }

}









<!--      console.log("TEST 2 START");-->
<!--      read_lines_and_process('descr-helper.js', new function(line) {-->
<!--        console.log("Line: line");-->
<!--      });-->
<!--      console.log("TEST 2 END");-->
