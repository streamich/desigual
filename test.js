var hl = require('./index');
var tok = hl.tok, jml = hl.jml, css = hl.css;


//          000000000011111111112222222222233333333334444
//          012345678901234567890123456789012345678901234
var code = '// comment\n// TODO: trololo\nvar lol = 123; function(arg) { return this; }';
code = 'html {color: red;}';

var language = require('./lang/javascript');
language = require('./lang/css');

var out = tok(code, language);
console.log(out);
var tree = jml(code, out);
console.log(tree);
console.log(css());


// var json = '{"key": "value"}';
// console.log(jml(json, tok(json, require('./lang/json'))));
