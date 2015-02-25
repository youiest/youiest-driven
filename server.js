GoogleSpreadsheet = Npm.require("google-spreadsheet");
var path = Npm.require('path');
var Future = Npm.require(path.join('fibers', 'future'));
Language.language = {};
Language.language.en ={};
Language.settings = {}

var lastupdate = new Date().getTime();

Language.init = function(GoogleSpreadsheetId){
	var lan = "en";
	langArray = ["fr","es","ar","sv","fa","fi","tl","ko","ru","iw","de","ja","it","is","pl","el","ur","en"];
	
	Language.language = {};
	Language.language.en ={};
	Language.settings = {};
   	
   	try{
   		var my_sheet = new GoogleSpreadsheet(GoogleSpreadsheetId);
   		my_sheet.getRows( 1, bindFunction);
   	}
   	catch(Error){
   		console.log(Error)
		// fut.return({});
   	}
}

var validKey = function(key){
	if(
		key != "_xml" 
		&& key != "id" 
		&& key != "title" 
		&& key != "_links" 
		&& key != "key" 
		&& key != "content" 
		&& key != "save" 
		&& key != "del"
		){
		return true;
	}
	else
		return false;
}
var objectValue = function(key,obj,value){
	key = key.split(".");
	var local = obj;
	var cKey = null;
	for(var i=0,il=key.length;i<il-1;i++){
		cKey = key[i];
		if(!local[cKey])
			local[cKey] = {};
		local = local[cKey]
	}
	cKey = key[key.length-1];
	local[cKey] = value;
}
var bindFunction = Meteor.bindEnvironment(function(err, row_data){
	var myLanguage = {};
	var gkey = null;
	if(row_data){
		for(var i=0,il=row_data.length;i<il;i++){
			gkey = row_data[i]["key"];
			for(var key in row_data[i]){
				if(validKey(key)){
					if(!myLanguage[key])
						myLanguage[key] = {};
					objectValue(gkey,myLanguage[key],row_data[i][key]);
				}
			}
		}
		for(var key in myLanguage){
			myLanguage[key]._id = key;
			Language.beforeInsert(myLanguage[key]);
		}
	}
})