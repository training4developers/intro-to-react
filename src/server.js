module.exports = function(options) {

	"use strict";

	global.logger = require("./logger")(options.logger);
	global.logger.info("logging started");

	const
		http = require("http"),
		express = require("express");

	let
		app = express(),
		server = http.createServer(app);

	app.use(/.*map$/, function(req, res) {
		res.writeHead(404);
		res.end();
	});

	app.use(express.static(options.webServer.folder));

	return {
		start: function() {

			return new Promise(function startPromise(resolve, reject) {
				server.listen(options.webServer.port, function serverListen(err) {

					server.options = options.webServer;

					if (err) {
						err.options = server.options;
						global.logger.error(err);
						reject(err);
						return;
					}

					global.logger.info(`http server started on port ${server.options.port}`);
					resolve(server.options);

				});
			});

		},
		stop: function() {

			return new Promise(function stopPromise(resolve, reject) {
				server.close(function serverClose(err) {

					if (err) {
						err.options = server.options;
						global.logger.error(err);
						reject(err);
						return;
					}

					global.logger.info(`http server stopped on port ${server.options.port}`);
					resolve(server.options);

				});
			});

		}
	}
};
