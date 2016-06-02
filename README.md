donot-transform
===============

This only contains an abstract class that all transform plugins inherit from. It cannot be used as a transform directly with *donot*.

# Implementing a transform plugin

Implement your transform plugins as the example below.

    const Transform = require('donor-transform');

    class MyTransform extends Cache {

        construct() {
            // Do your constructor work.
        }

        // Returns true if the transform is able to
        // transform the filename.
        canTransform(filename) {
        	return Promise.resolved(
        		// Ex. returns `true` if filename ends with `.myremoteext`.
        		/\.myremoteext$/.test(filename)
        	);
        }

        // Returns true if the transform allows access to a specific file.
        // Use this to disallow public access to any template files.
        // This is ignored (not called) if the user has set allowTemplateAccess
        // flag.
        // (Optional - default implementation returns true)
        allowAccess(filename) {
        	// Ex. returns `false` if filename ends with `.mylocalext`.
        	return Promise.resolved(!/\.mylocalext$/.test(filename));
        }

        // Returns a remote filename mapped to a local filename.
        map(filename) {
        	// Ex. replaces `.myremoteext` with `.mylocalext`.
        	return Promise.resolved(filename.replace(/\.myremoteext$/, '.mylocalext'));
        }

        // Returns compiled data.
        // (Optional - default implementation returns `data`).
        // (Notice: Results from `compile` is cached, so this is only called once per file).
        compile(filename, data, options) {
        	return new Promise((resolved, rejected) => {
        		// Compile your local file and return in the following format.
        		resolved({
        			data: myData, // The compiled data
        			map: myMap // An optional source map
        		});
        		// Call `rejected` with an error if compile fails.
        	});gi
        }

        // Returns rendered compiled data.
        // (Optional - default implementation returns `compiledData`).
        // (Notice: Results from `render` is NOT cached).
        render(filename, compiledData, options) {
        	return new Promise((resolved, rejected) => {
        		// Render any compiled data and return in the following format.
        		resolved({
        			data: myData, // The rendered data
        			map: myMap // An optional source map
        		});
        		// Call `rejected` with an error if rendering fails.
        	});
        }

    }

    module.exports = exports = MyTranform;

# License

MIT
