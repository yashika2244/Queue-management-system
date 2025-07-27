#Argument

  Argument testing for idiot proofing code.

### Installation

```bash
$ npm install argument
```

## Quick Start

```
var classified = require('argument');

(function() {
	argument.test(1, 'null', 'string').test(2, 'bool', 'undef');
})('This is a String', true);

(function() {
	argument.test(1, 'null', 'url').test(2, 'array', 'undef');
})('http://www.openovate.com/');
```

### Argument Test Types

  * string
  * object
  * array
  * undefined
  * null
  * number
  * int
  * float
  * numeric
  * function
  * regex
  * date
  * url
  * cc
  * html
  * hex
  * email
  * alphanum
  * alphanumhyphen
  * alphanumscore
  * alphanumline
  