var assert 		= require('assert');
var argument 	= require('../argument');

describe('Argument Test Suite', function() {
	describe('Basic Argument Tests', function() {
		it('should be a string', function() {
			var test = function() {
				argument.test(1, 'string');
				return true;
			};
			
			assert.equal(true, test('A String'));
			assert.throws(function() {
				test();
			}, Error);
		});
		
		it('should be a bool', function() {
			var test = function() {
				argument.test(1, 'bool');
				return true;
			};
			
			assert.equal(true, test(true));
			assert.throws(function() {
				test();
			}, Error);
		});
		
		it('should be a number', function() {
			var test = function() {
				argument.test(1, 'number');
				return true;
			};
			
			assert.equal(true, test(4));
			assert.equal(true, test(4.5));
			assert.throws(function() {
				test('4');
			}, Error);
			assert.throws(function() {
				test();
			}, Error);
		});
		
		it('should be an int', function() {
			var test = function() {
				argument.test(1, 'int');
				return true;
			};
			
			assert.equal(true, test(4));
			assert.throws(function() {
				test(4.5);
			}, Error);
			assert.throws(function() {
				test('4');
			}, Error);
			assert.throws(function() {
				test();
			}, Error);
		});
		
		it('should be a float', function() {
			var test = function() {
				argument.test(1, 'float');
				return true;
			};
			
			assert.equal(true, test(2.3));
			assert.throws(function() {
				test(2);
			}, Error);
			assert.throws(function() {
				test('2.3');
			}, Error);
			assert.throws(function() {
				test();
			}, Error);
		});
		
		it('should be an email', function() {
			var test = function() {
				argument.test(1, 'email');
				return true;
			};
			
			assert.equal(true, test('cblanquer@openovate.com'));
			assert.equal(true, test('cblanquer+1@openovate.com'));
			assert.throws(function() {
				test('anything');
			}, Error);
			assert.throws(function() {
				test('cblanquera@local');
			}, Error);
			assert.throws(function() {
				test();
			}, Error);
		});
		
		it('should be a url', function() {
			var test = function() {
				argument.test(1, 'url');
				return true;
			};
			
			assert.equal(true, test('http://www.openovate.com/some/path?is[]=thisgood'));
			assert.equal(true, test('https://openovate.com/some/path?is[]=thisgood'));
			assert.equal(true, test('https://openovate.com'));
			assert.throws(function() {
				test('openovate.com');
			}, Error);
			assert.throws(function() {
				test();
			}, Error);
		});
		
		it('should be a Date', function() {
			var test = function() {
				argument.test(1, 'date');
				return true;
			};
			
			assert.equal(true, test(new Date()));
			assert.throws(function() {
				test('openovate.com');
			}, Error);
			assert.throws(function() {
				test();
			}, Error);
		});
		
		it('should be html', function() {
			var test = function() {
				argument.test(1, 'html');
				return true;
			};
			
			assert.equal(true, test('<br />'));
			assert.equal(true, test('<img src="something" />'));
			assert.equal(true, test('<span style="color: #FFFFFF;">Test</span>'));
			assert.throws(function() {
				test('<br<>');
			}, Error);
			assert.throws(function() {
				test();
			}, Error);
		});
		
		it('should be a credit card', function() {
			var test = function() {
				argument.test(1, 'cc');
				return true;
			};
			
			assert.equal(true, test('4111111111111111'));
			assert.throws(function() {
				test('4111 1111 1111 1111');
			}, Error);
			assert.throws(function() {
				test('2111111111111111');
			}, Error);
			assert.throws(function() {
				test('511111111111111');
			}, Error);
		});
		
		it('should be a hex', function() {
			var test = function() {
				argument.test(1, 'hex');
				return true;
			};
			
			assert.equal(true, test('064ABF'));
			assert.equal(true, test('fF4c99'));
			assert.throws(function() {
				test('G02HZK');
			}, Error);
			assert.throws(function() {
				test('fF4c99D');
			}, Error);
			assert.throws(function() {
				test();
			}, Error);
		});
		
		it('should be alphanum', function() {
			var test = function() {
				argument.test(1, 'alphanum');
				return true;
			};
			
			assert.equal(true, test('ADog009'));
			assert.throws(function() {
				test('A Dog 009');
			}, Error);
			assert.throws(function() {
				test('A-Dog-009');
			}, Error);
			assert.throws(function() {
				test('A_Dog_009');
			}, Error);
			assert.throws(function() {
				test();
			}, Error);
		});
		
		it('should be alphanumscore', function() {
			var test = function() {
				argument.test(1, 'alphanumscore');
				return true;
			};
			
			assert.equal(true, test('ADog009'));
			assert.equal(true, test('A_Dog_009'));
			assert.throws(function() {
				test('A Dog 009');
			}, Error);
			assert.throws(function() {
				test('A-Dog-009');
			}, Error);
			assert.throws(function() {
				test();
			}, Error);
		});
		
		it('should be alphanumhyphen', function() {
			var test = function() {
				argument.test(1, 'alphanumhyphen');
				return true;
			};
			
			assert.equal(true, test('ADog009'));
			assert.equal(true, test('A-Dog-009'));
			assert.throws(function() {
				test('A Dog 009');
			}, Error);
			assert.throws(function() {
				test('A_Dog_009');
			}, Error);
			assert.throws(function() {
				test();
			}, Error);
		});
		
		it('should be alphanumline', function() {
			var test = function() {
				argument.test(1, 'alphanumline');
				return true;
			};
			
			assert.equal(true, test('ADog009'));
			assert.equal(true, test('A_Dog-009'));
			assert.throws(function() {
				test('A Dog 009');
			}, Error);
			assert.throws(function() {
				test();
			}, Error);
		});
		
		it('should be null', function() {
			var test = function() {
				argument.test(1, 'null');
				return true;
			};
			
			assert.equal(true, test(null));
			assert.throws(function() {
				test('A String');
			}, Error);
		});
		
		it('should be undefined', function() {
			var test = function() {
				argument.test(1, 'undef');
				return true;
			};
			
			assert.equal(true, test());
			assert.throws(function() {
				test('A String');
			}, Error);
		});
		
		it('should be an array', function() {
			var test = function() {
				argument.test(1, 'array');
				return true;
			};
			
			assert.equal(true, test([1, 2, 3]));
			assert.throws(function() {
				test();
			}, Error);
		});
		
		it('should be a hash', function() {
			var test = function() {
				argument.test(1, 'hash');
				return true;
			};
			
			assert.equal(true, test({ test: 1, test2: 2}));
			assert.throws(function() {
				test(String);
			}, Error);
		});
		
		it('should be numeric', function() {
			var test = function() {
				argument.test(1, 'numeric');
				return true;
			};
			
			assert.equal(true, test(4));
			assert.equal(true, test(4.5));
			assert.equal(true, test('4'));
			assert.equal(true, test('4.5'));
			assert.throws(function() {
				test('4.5.3');
			}, Error);
			assert.throws(function() {
				test('abc');
			}, Error);
			assert.throws(function() {
				test(true);
			}, Error);
			assert.throws(function() {
				test();
			}, Error);
		});
		
		it('should be regex', function() {
			var test = function() {
				argument.test(1, 'regex');
				return true;
			};
			
			assert.equal(true, test(/^[A-Z]/));
			assert.throws(function() {
				test();
			}, Error);
		});
		
		it('should be a function', function() {
			var test = function() {
				argument.test(1, 'function');
				return true;
			};
			
			assert.equal(true, test(function() {}));
			assert.throws(function() {
				test();
			}, Error);
		});
	});
	
	describe('Compound Argument Tests', function() {
		it('should be string, numeric, hex', function() {
			var test = function() {
				argument
					.test(1, 'string')
					.test(2, 'numeric')
					.test(3, 'hex');
					
				return true;
			};
			
			assert.equal(true, test('', '4.5', '000FFF'));
			assert.throws(function() {
				test(4.5, '4.5', '000FFF');
			}, Error);
			assert.throws(function() {
				test('', '4.5.A', '000FFF');
			}, Error);
			assert.throws(function() {
				test('', '4.5', '000FFG');
			}, Error);
		});
		
		it('should be string or bool, object or array', function() {
			var test = function() {
				argument
					.test(1, 'string', 'bool')
					.test(2, 'object', 'array');
					
				return true;
			};
			
			assert.equal(true, test('', {}));
			assert.equal(true, test(true, []));
			assert.equal(true, test('', {}));
			assert.equal(true, test(false, []));
			assert.throws(function() {
				test(4, []);
			}, Error);
			assert.throws(function() {
				test(false, 4);
			}, Error);
			assert.throws(function() {
				test();
			}, Error);
		});
	});
	
	describe('Virtual Argument Tests', function() {
		it('should be string', function() {
			assert.equal('object', typeof argument.virtual([''], 1, ['string']));
			assert.throws(function() {
				argument.virtual([4], 1, ['string'])
			}, Error);
			assert.throws(function() {
				argument.virtual([], 1, ['string'])
			}, Error);
		});
		
		it('should be string or bool', function() {
			assert.equal('object', typeof argument.virtual([null, ''], 2, ['string', 'bool']));
			assert.equal('object', typeof argument.virtual([null, false], 2, ['string', 'bool']));
			assert.throws(function() {
				assert.equal('object', typeof argument.virtual([null, []], 2, ['string', 'bool']));
			}, Error);
		});
	});
	
	describe('Disable Tests', function() {
		it('should be disabled', function() {
			argument.turnOff();
			
			assert.equal('object', typeof argument.virtual([null, false], 2, ['string', 'numeric']));
		});
	});
	
	argument.turnOn();
});