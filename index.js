/**
 * Remove all instances of `:root` from a stylesheet. 
 * Original technique from Basscss by @jxkblk.
 * 
 * @link http://git.io/vuvUC
 */

var postcss = require('postcss');
var assign = require('object-assign');

module.exports = postcss.plugin('remove-root', function (opts) {
  return function (css) {
    opts = assign({
      remove: true
    }, opts);

    css.walkRules(function (rule) {
      if (rule.selector === ':root' && opts.remove !== false) {
        rule.remove();
      }
    });
  };
});
