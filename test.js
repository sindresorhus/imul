'use strict';
var test = require('ava');
Math.imul = undefined;
var imul = require('./');

test(function (t) {
	t.assert(imul(5, -0) === 0);
	t.assert(imul(0.2, 7) === 0);
	t.assert(imul(7, 0.9) === 0);
	t.assert(imul(0.4, 7) === 0);
	t.assert(imul(-0, 7) === 0);
	t.assert(imul(8, 0.1) === 0);
	t.assert(imul(-1, 8) === -8);
	t.assert(imul(-2, -2) === 4);
	t.assert(imul(7, 1.9) === 7);
	t.assert(imul(2, 4) === 8);
	t.assert(imul(1.9, 7) === 7);
	t.assert(imul(1.1, 7) === 7);
	t.assert(imul(7, 1.1) === 7);
	t.assert(imul(0xfffffffe, 5) === -10);
	t.assert(imul(0xffffffff, 5) === -5);
	t.end();
});
