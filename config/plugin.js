'use strict';

// had enabled by egg
// exports.static = true;

exports.ejs = {
	enable : true,
	package: 'egg-view-ejs',
};

exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

exports.rest = {
	enable: true,
	package: 'egg-rest',
};

exports.validate = {
	enable: true,
	package: 'egg-validate',
};