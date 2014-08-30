/**
 * This function will let you read object properties by using
 * a string dot notation. Useful when you are using variables
 * to access to a nested object property. For example:
 * 
 * var a = {b:{c:5}};
 * console.log(readPath(a, 'b.c'));
 * 
 * @author Christian Velazquez
 * @version 0.1
 * @link https://github.com/cvelazquez/javascript.readAndWritePaths
 * 
 * @param object Object to read
 * @param string Path to access the object property
 **/
function readPath(object, keyPath){
	if ( keyPath.length > 0 ) {
		var keysArray = keyPath.split('.');
		var propertyName = keysArray.shift();
		var newPath = keysArray.join('.');
		if (propertyName in object) {
			return readPath(object[propertyName], newPath);
		} else {
			return;
		}
	}
	return object;
};

/**
 * This function will let you write object properties by using
 * a string dot notation. Useful when you are using variables
 * to access to a nested object property. For example:
 * 
 * var a = {b:{c:5}};
 * writePath(a, 'b.c', 3);
 * 
 * @author Christian Velazquez
 * @version 0.1
 * @link https://github.com/cvelazquez/javascript.readAndWritePaths
 * 
 * @param object Object to write
 * @param string Path to access the object property
 * @param mixed Value to set
 **/
function writePath(object, keyPath, value){
	var keysArray = keyPath.split('.');
	var propertyName = keysArray.shift();
	var newPath = keysArray.join('.');
	if ( newPath.length > 0) {
		if ( !object.hasOwnProperty(propertyName) ) {
			object[propertyName] = {};
		}
		writePath(object[propertyName], newPath, value);
	} else {
		object[propertyName] = value;
	}
};
