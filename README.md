Meteor package grabs variables from spreadsheet. 
---------
Your apps settings and language translations will fly.


# youiest:driven language from drive spreadsheet

Basic useful feature list:

 * Fetch language from google drive spreadsheet
 * In drive use google translate formula or enter manually in next column if it fails.
 * An variable can be pulled from the spreadsheet.

See spreadsheet example for copy:

https://docs.google.com/spreadsheets/d/1i9RZmgLQe2CsFX0BYMQnjLyd8185gYaFsW74TRtj7RQ/edit#gid=0


The package is available on atmosphere as well as the code is on git 

```javascript
meteor add youiest:driven;

```

By default the language is "en-us", if you want to change the language you can set 
it by 

```javascript
Session.set("language",myLanguage);

```

Use in template with keys from the sheet:

```html
  <button>{{lang.body.clickMe}}</button>
    <p>
      {{lang.body.button.firstMessage}} 
      {{counter}} 
      {{lang.body.button.secondMessage}}
    </p>

```

Use in template

```javascript
  //on client side
    Language.get("body.secondMessage");
    
    //on server side
    Language.get("body.secondMessage","en-us");

```

This is [on GitHub](https://github.com/youest/somerepot) it's on atmosphere too.



Todo!

* guide to copy in spreadsheet

### Stuff used to make this:

 * [marked](https://github.com/chjj) for Markdown parsing
 * [CodeMirror](http://codemirror.net/) for the awesome syntax-highlighted editor
 * [highlight.js](http://softwaremaniacs.org/soft/highlight/en/) for syntax highlighting in output code blocks
 * [js-deflate](https://github.com/dankogai/js-deflate) for gzipping of data to make it fit in URLs

