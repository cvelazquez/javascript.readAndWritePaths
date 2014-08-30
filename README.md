javascript.readAndWritePaths
============================

A couple of functions to read and write object properties by using a string dot notation. Example:

```javascript
var a = {b:{c:{d:1,e:2}}};
writePath(a, 'b.c.f', 3);
var c = readPath(a, 'b.c');
console.log(c);
```
