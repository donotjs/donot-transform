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

	compile(filename, data, options) {
		return Promise.resolve(data);
	}

	render(filename, data, options) {
		return Promise.resolve(data);
	}

}

module.exports = exports = Transform;
