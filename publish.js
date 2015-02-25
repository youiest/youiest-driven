Meteor.publish("language",function(language){
	return Language.find({"_id":language});
});
