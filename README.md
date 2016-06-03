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
					// Ex. returns `true` if filename ends with `.myremoteext`.
					return /\.myremoteext$/.test(filename);
        }

        // Returns true if the transform allows access to a specific file.
        // Use this to disallow public access to any template files.
        // This is ignored (not called) if the user has set allowTemplateAccess
        // flag.
        // (Optional - default implementation returns true)
        allowAccess(filename) {
        	// Ex. returns `false` if filename ends with `.mylocalext`.
        	return !/\.mylocalext$/.test(filename);
        }

        // Returns a remote filename mapped to a local filename.
        map(filename) {
        	// Ex. replaces `.myremoteext` with `.mylocalext`.
        	return filename.replace(/\.myremoteext$/, '.mylocalext');
        }

        // Compiles data from one file to another.
        // Notice: Results from `compile` is cached, so this is only called when cache is invalid.
        compile(srcFilename, destFilename, options) {
        	return new Promise((resolved, rejected) => {
        		// Compile the srcFilename to destFilename and resolve.
        		resolved({
					// An optional source map
        			map: myMap
        		});
        		// Call `rejected` with an error if compile fails.
        	});
        }
        
        // Return `true` if transform needs rendering.
        needsRendering() {
        	return `true`;
        }

        // Returns rendered compiled data.
        // Notice: Results from `render` is NOT cached and is called on every request.
        render(compiledData, options) {
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
