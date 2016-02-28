"use strict";

const
	fs = require("fs"),
	server = require("./dist/server.js");

fs.readFile("./config.json", function(err, data) {

	if (err) {
		console.log(err);
		return;
	}

	let options = null;

	try {
		options = JSON.parse(data, function(propName, propValue) {
			if (propName === "port") {
				return process.env.PORT || propValue;
			}
			return propValue;
		});
	} catch (err) {
		console.log(err);
		return;
	}

	server(options).start();

});
