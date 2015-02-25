Package.describe({
	summary: "Youiest's google drive language package."
});

Npm.depends({
	"google-spreadsheet" : "0.2.8"
});

Cordova.depends({

});

Package.on_use(function (api) {
	api.use(['random','session','ui','deps'], ['client', 'server']);
  	api.add_files(['collection.js'], ['server','client']);	
	api.add_files('client.js', 'client');
	api.add_files(['server.js','publish.js'], 'server');
	if(api.export){
		api.export("Language",['server','client']);
		api.export("lang",['server','client']);
	}
});