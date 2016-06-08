'use strict';

class Transform {

	canTranform(filename) {
		return false;
	}

	allowAccess(filename) {
		return true;
	}

	map(filename) {
		throw Error('map not implemented.');
	}

	compile(filename, data, map, options) {
		throw Error('compile not implemented');
	}

}

module.exports = exports = Transform;
