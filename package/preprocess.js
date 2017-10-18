//constants
var R = require ('ramda');
var path = require ('path');
var cordova_src = path .join (__dirname, '/../temp/cordova');
var merges_src = path .join (__dirname, '/../src/merges');
var transforms_src = path .join (__dirname, '/../src/transforms');
var processing_base = path .join (__dirname, '/../temp/dist/www');
var cordova_dist = path .join (__dirname, '/../temp/dist');

				
//utils
var fs = require ('fs-extra');
var all_files =	function (dir) {
					var results = [];
					var list = fs .readdirSync (dir);
					list .forEach (function (file) {
						file = path .join (dir, file);
						var stat = fs .statSync (file);
						results .push (file);
					});
					return results;
				}
var files_not =	function (extensions) {
				return	function (dir) {
							var results = [];
							var list = fs .readdirSync (dir);
							list .forEach (function (file) {
								file = path .join (dir, file);
								var stat = fs .statSync (file);
								if (! extensions .some ((extension) => file .endsWith (extension)))
									results .push (file);
							});
							return results;
						}
			};
var files =	function (extension) {
				return	function (dir) {
							var results = [];
							var list = fs .readdirSync (dir);
							list .forEach (function (file) {
								file = path .join (dir, file);
								var stat = fs .statSync (file);
								if (stat && stat .isDirectory ())
									results = results .concat (files (extension) (file));
								else if (file .endsWith (extension))
									results .push (file);
							});
							return results;
						}
			};
var file =	function (path) {
				return fs .readFileSync (path) .toString ();
			};
var write =	function (path) {
				return	function (string) {		
							fs .outputFileSync (path, string);
						}
			};
var time =	function (name, what) {
				var start = new Date ();
				try {
					var x = what ();
					console .log (name, 'took', (new Date () - start) / 1000, 's');
				}
				catch (e) {
					if (! (e && e .reported)) {
						console .log (name, 'failed', (new Date () - start) / 1000, 's');
					}
					else {
						console .log (name, 'failed', (new Date () - start) / 1000, 's', e);
						if (e)
							e .reported = true;
					}
					throw e;
				}
				return x;
			};
			


//build
time ('build', function () {
	fs .readdirSync (cordova_dist) .forEach (function (file) {
		const file_path = path .resolve (cordova_dist, file);
		const file_info = fs .statSync (file_path);
		
		if (file_info .isDirectory ())
			fs .removeSync (file_path)
		else
			fs .unlinkSync (file_path)
	});
	all_files (cordova_src)
		.forEach (function (path_/* of file*/) {
			var name = path_ .split ('/') .reverse () [0];
			var dest_path = path .join (cordova_dist, name);
			fs .copySync (path_, dest_path);
		});
	all_files (merges_src)
		.forEach (function (path_/* of file*/) {
			var name = path_ .split ('/') .reverse () [0];
			var dest_path = path .join (processing_base, name);
			fs .copySync (path_, dest_path);
		});
	files ('.js') (transforms_src)
		.forEach (function (_path) {
			var relative_path = _path .slice (transforms_src .length + 1);
			var name =	relative_path
							.slice (0, - ('.js' .length));
			var object_path/* of transform */ = path .join (processing_base, name);
										
			time ('transforming ' + name, function () {
				var transform = require (_path);
				var source = file (object_path);
				write (object_path) (transform (source));
			})
		})
});