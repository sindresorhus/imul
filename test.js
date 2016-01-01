import test from 'ava';

Math.imul = undefined;
const m = require('./');

test(t => {
	t.is(m(5, -0), 0);
	t.is(m(0.2, 7), 0);
	t.is(m(7, 0.9), 0);
	t.is(m(0.4, 7), 0);
	t.is(m(-0, 7), 0);
	t.is(m(8, 0.1), 0);
	t.is(m(-1, 8), -8);
	t.is(m(-2, -2), 4);
	t.is(m(7, 1.9), 7);
	t.is(m(2, 4), 8);
	t.is(m(1.9, 7), 7);
	t.is(m(1.1, 7), 7);
	t.is(m(7, 1.1), 7);
	t.is(m(0xfffffffe, 5), -10);
	t.is(m(0xffffffff, 5), -5);
});
