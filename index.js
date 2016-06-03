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

	compile(srcFilename, destFilename, options) {
		throw Error('compile not implemented');
	}

	needsRendering() {
		return false;
	}

	render(data, options) {
		return Error('render not implemented');
	}

}

module.exports = exports = Transform;
