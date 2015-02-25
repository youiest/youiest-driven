# drive-variables
Meteor package grabs variables from spreadsheet. Your apps settings and language translations will fly.

# Youiest's google drive language package

Basic useful feature list:

 * Fetch language from google drive
 * Web browser has it's native language instead of just English

The package is available on atmosphere as well as the code is on git 

```javascript
meteor add youiest:mypackage;
//just incase you use mrt
mrt add youiest:mypackage;

```

By default the language is "en-us", if you want to change the language you can set 
it by 

```javascript
Session.set("language",myLanguage);

```

Use in template

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

