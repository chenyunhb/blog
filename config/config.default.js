'use strict';

const path = require('path');

module.exports = appInfo => {
	const config = module.exports = {};

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1521736151885_6953';

	// add your config here
	// config.middleware = ['xdr'];

	config.view = {
		mapping: {
			'.ejs': 'ejs',
		},
	};

	config.mongoose = {
		client: {
			url    : 'mongodb://127.0.0.1/27017',
			options: {},
		},
	};

	config.rest = {
		authRequest: null,
		// authRequest: async ctx => {
		//   // A truthy value must be returned when authentication succeeds.
		//   // Otherwise the client will be responded with `401 Unauthorized`
		//   return accessToken;
		// }

		// Specify the APIs for which authentication can be ignored.
		// If authRequest is configured, authentication for all APIs is required by default.
		authIgnores: null,
		// authIgnores: {
		//   users: {
		//     show: true, // allow GET /api/users/:id to ignore authentication
		//     index: true,
		//   }
		// }
	};

	config.security = {
		csrf           : {
			enable: false,
		},
		domainWhiteList: [
			'http://localhost:63342',
			'http://127.0.0.1:63342',
			'http://localhost:3000',
			'http://127.0.0.1:3000',
		],
	};

	config.cors = {
		allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
	};

	config.static = {
		prefix: '/',
		dir: path.join(appInfo.baseDir, 'my-blog/build'),
	};


	return config;
};
