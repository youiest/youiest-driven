# Meteor package grabs variables from spreadsheet.
Your apps settings and language translations will fly.

# youiest:driven spreadsheet package
Basic useful feature list:
- Fetch text from google drive spreadsheet
- Use google translate formula to translate
- Manually translate where necessary. Simply add text to the next column.
- Take any variable you wish from the spreadsheet and place it into your Meteor app.
- Stop editing html! A timer updates the text in your Meteor app from the spreadsheet.

The package is available on atmosphere.

```javascript
meteor add youiest:driven
```

Demo app running: [https://github.com/youiest/youiest-driven-demo](https://github.com/youiest/youiest-driven-demo)

See spreadsheet example. [https://docs.google.com/spreadsheets/d/1i9RZmgLQe2CsFX0BYMQnjLyd8185gYaFsW74TRtj7RQ/edit#gid=0](https://docs.google.com/spreadsheets/d/1i9RZmgLQe2CsFX0BYMQnjLyd8185gYaFsW74TRtj7RQ/edit#gid=0)

By default the language is "en-us". The column "en-usM" or any language code followed by a "M" is manual text for when google trainslate isn't accurate. if you want to change the language you can set it by

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

This is [on GitHub](https://github.com/youest/somerepot) and [on atmosphere](https://atmospherejs.com/youiest/driven) too.

Todo!
- guide to copy in spreadsheet
- tests to show each step from timer to text on page
