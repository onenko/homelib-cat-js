# homelib-cat-js
Home Library Catalogue - implemented with JS, jQuery, DataTables

## Global Decisions

- trying to create serverless catalogue, that runs in a browser;
- we can't read files in local file system by JS in browser;
- we should keep data inside JS scripts;
- consider, a home library contains around 1000 books;
- every book roughly takes 2000 characters for the description,
  including author, title, isbn, textual descriptions;
  in total it will be 4000 bytes;
- thus all the data will take around 8Mb of memory, which is not much for
  modern systems.

## Plan what to do

- use jQuery, DataTables to display a table with books
- use JS classes as data sources, i. e. arts.js - list of arts

## WBS

- create menus and stubs "Under construction"
- create authors page with table - proper columns and few lines of data
- create multilanguage support


## WBS done
- project in github and Idea
- 


# References

https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes - language codes
http://www.lingoes.net/en/translator/langcode.htm - language codes + subcodes (do not use at this time)

