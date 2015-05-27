Language.defaultLanguage = navigator.language;
Session.set("language",navigator.language);
Tracker.autorun(function(){
  	Meteor.subscribe("language",Session.get("language")); 
});

UI.registerHelper("lang", function () {
	Language.lang = Language.findOne({"_id":Session.get("language")}) || Language.lang;
	return Language.lang;
});