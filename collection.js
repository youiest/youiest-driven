Language = new Meteor.Collection("language");
Language.lang = {};
Language.defaultLanguage = "en-us"
Language.beforeInsert = function(insert){
	var language = Language.findOne({"_id":insert._id});
	
	insert.modifiedAt = new Date().getTime();
		
	if(language){
		delete insert._id;
		insert.modifiedAt = new Date().getTime();
		Language.update({"_id":language._id},{$set:insert});
	}
	else{
		insert.createdAt = new Date().getTime();
		Language.insert(insert);
	}
}

Language.get = function(key,lang){
	if(!lang)
		lang = Language.defaultLanguage;
	if(Meteor.isClient){
		return Language.getValue(key,Language.lang);
	}
	else{
		var language = Language.findOne({"_id":lang});
		return Language.getValue(key,language);
	}
}

Language.getValue = function(key,obj){
	try{
		key = key.split(".");
		var local = obj;
		var cKey = null;
		for(var i=0,il=key.length;i<il;i++){
			cKey = key[i];
			if(!local[cKey]){
				local = "";
				break;
			}
			local = local[cKey]
		}
		return local || "";
	}
	catch(err){
		return "";
	}
}