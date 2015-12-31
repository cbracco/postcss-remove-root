var removeRoot = require('../');
var fs = require('fs');
var postcss = require('postcss');
var customProperties = require('postcss-custom-properties');
var test = require('tape');

var css = fs.readFileSync('test/fixture.css', 'utf8').trim();

test('all instances of :root should be removed from the stylesheet', function(t) {
  var fixture = postcss().use(
    customProperties,
    removeRoot
  ).process(css).css.trim();
  var expected = fs.readFileSync('test/expected.css', 'utf-8').trim();
  t.same(fixture, expected);
  t.end();
});
