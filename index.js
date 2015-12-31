/**
 * Remove all instances of `:root` from a stylesheet. 
 * Original technique from Basscss by @jxkblk.
 * 
 * @link http://git.io/vuvUC
 */

var postcss = require('postcss');

module.exports = postcss.plugin('remove-root', function (opts) {
  return function (css) {
    opts = opts || {};

    css.walkRules(function (rule) {
      if (rule.selector === ':root') {
        rule.remove();
      }
    });
  };
});
