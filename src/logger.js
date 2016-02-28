module.exports = function(config) {

	"use strict";

	const
		winston = require("winston"),
		logger =  new winston.Logger();

	if (config.transports.console) {
		logger.add(winston.transports.Console, {
			level: config.transports.console.level || "error",
			colorize: config.transports.console.colorize || true,
			timestamp: config.transports.console.timestamp || true
		});
	}

	if (config.transports.file) {
		logger.add(winston.transports.File, {
			level: config.transports.file.level || "error",
			filename: config.transports.file.fileName || "logs/server.log",
			timestamp: config.transports.file.timestamp || true
		});
	}

	return logger;

};
