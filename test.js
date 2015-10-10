'use strict'

var test = require('tape')
var print = require('./')

test(function (t) {
  t.equals(print({foo: 'bar', baz: 'qux'}), '{"foo":"bar","baz":"qux"}')
  t.equals(print([1, 2, 3]), '[1,2,3]')
  t.equals(print(1), '1')
  t.equals(print(function () {}), 'function () {}')
  t.end()
})
