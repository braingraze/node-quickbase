// npm install tflanagan/node-quickbase || npm install quickbase
var quickbase = require('quickbase');

var qb = new quickbase({
	realm: 'www',
	appToken: 'appToken'
}, function(err, results){
	qb.api('API_DoQuery', {
		dbid: 'bby2j1bme',
		clist: ['1', '2', '3'],
		query: "{'3'.EX.'50'}"
	}, function(err, results){
		// Queued and fired after Authenticate is successful

		console.log(err, results);
	});

	qb.api('API_DoQuery', {
		dbid: 'bby2j1bme',
		clist: '2.3',
		slist: ['3'],
		query: "{'3'.XEX.'50'}"
	}, function(err, results){
		// Queued and fired after Authenticate is successful

		console.log(err, results);
	});
});

qb.api('API_Authenticate', {
	username: 'username',
	password: 'password'
}, function(err, results){
	var message = 'Connected';

	if(!results){
		message = 'Not ' + message;
	}

	console.log(message);

	qb.api('API_DoQuery', {
		dbid: 'bby2j1bme',
		clist: '2.3',
		slist: ['3'],
		query: "{'3'.XEX.'50'}"
	}, function(err, results){
		// Fired instantly, if connected

		console.log(err, results);
	});
});

qb.api('API_DoQuery', {
	dbid: 'bby2j1bme',
	clist: '2.3',
	slist: ['3'],
	query: "{'3'.XEX.'50'}"
}, function(err, results){
	// Fired after Authenticate is successful

	console.log(err, results);
});

qb.api('QueryEdit', {
	query: {
		dbid: 'bby2j1bme',
		clist: [3, 12],
		query: "{'3'.EX.'50'}"
	},
	edit: {
		dbid: 'bby2j1bme',
		fields: [
			{fid: 13, value: '_query_12'}
		],
		rid: '_query_3'
	}/*,

	Defining the import property will cause the operation to use
	ImportFromCSV instead of firing off an EditRecord per record

	the rid property is required

	import: {
		rid: 3,
		skipfirst: false,
		clist_output: [3, 12]
	}*/
}, function(err, results){
	// Fired after Authenticate is successful

	console.log(err, results);
});