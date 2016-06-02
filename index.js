'use strict';

class Transform {

	canTranform(filename) {
		return Promise.resolve(false);
	}

	allowAccess(filename) {
		return Promise.resolve(true);
	}

	map(filename) {
		throw Error('mapToLocal not implemented.');
	}

	compile(filename, data, options) {
		return Promise.resolve(data);
	}

	render(filename, data, options) {
		return Promise.resolve(data);
	}

}

module.exports = exports = Transform;
