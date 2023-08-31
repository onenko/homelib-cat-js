/**
 * genre-helper.js - helper functions to handle genres string
 */

function Genre(abbr, name) {
    this.abbr = abbr;
    this.name = name;
    this.local = name;
}

const GenreHelper = {
  genres: [
    new Genre("act", "action"),     // Including pirates, etc.
    new Genre("adv", "adventure"),  // пригоди, приключения
    new Genre("chi", "children"),
    new Genre("cla", "classic"),
    new Genre("cri", "criminal"),
    new Genre("det", "detective"),
    new Genre("ero", "erotic"),
    new Genre("fan", "fantasy"),    // Includes mystical things
    new Genre("f-f", "fan-fiction"),// created by fans of some literature work
    new Genre("flk", "folklore"),   // Myths, fairytales, etc. that can’t be put to children
    new Genre("got", "gothic"),     // gothic novels, noir
    new Genre("his", "history"),
    new Genre("hor", "horror"),     // Including suspence
    new Genre("hum", "humor"),
    new Genre("mod", "modern"),

    new Genre("n-f", "non-fiction"),    // check few subgenres that follow
    new Genre("nfb", "nf-biographie"),  // includes memoirs
    new Genre("nfd", "nf-documental"),
    new Genre("nfg", "nf-guides"),      //  Learning books
    new Genre("nfp", "nf-philosophy"),
    new Genre("nfr", "nf-religion"),
    new Genre("ref", "nf-reference"),   // reference books, including dictionaries
    new Genre("nft", "nf-travel"),      // Travel guides. NOTE: fiction about travel goes to adventure

    new Genre("phi", "philosophy"),     // Only fiction about/with philosophy
    new Genre("poe", "poetry"),
    new Genre("pol", "politic"),
    new Genre("rel", "religion"),       // fiction literature about religion

    new Genre("s-f", "sci-fiction"),
    new Genre("sfa", "sf-apocalyptic"), // Apocalyptic, aliens invasion, post-apocalyptic
    new Genre("sfc", "sf-cyberpank"),
    new Genre("sfp", "sf-portals"),     // varios travels through space and time
    new Genre("sfs", "sf-space"),       // Space, aliens, etc. (i. E. Star Trek, The Expanse)
    new Genre("sfu", "sf-utopie"),      // Utopias and antiutopias, alternative sf

    new Genre("spy", "spy"),
    new Genre("tee", "teenagers"),      // school, first love, new friends, etc.
    new Genre("thr", "thriller"),
    new Genre("und", "undefined"),
    new Genre("war", "war"),            // including commandos (covert ops)
    new Genre("wes", "western")
  ],

  isGenreValid: function(genre) {
    let obj = this.genres.find(x => x.abbr === genre || x.name === genre);
    return obj !== undefined;
  },

  isGenresStringValid: function(genresString) {
    let genres = genresString.split('/');
//    var valid = true;
    for(var i = 0; i < genres.length; i++) {
      if( ! this.isGenreValid(genres[i])) {
        return false;
      }
    }
//    genres.forEach(genre => valid = valid && this.isGenreValid(genre));
//    return valid;
    return true;
  }

}
