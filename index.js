'use strict';

class Transform {

	canTranform(filename) {
		return Promise.resolved(false);
	}

	allowAccess(filename) {
		return Promise.resolved(true);
	}

	map(filename) {
		throw Error('mapToLocal not implemented.');
	}

	compile(filename, data, options) {
		return Promise.resolved(data);
	}

	render(filename, data, options) {
		return Promise.resolved(data);
	}

}

module.exports = exports = Transform;
