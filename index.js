'use strict';

const postcss = require('postcss');

module.exports = postcss.plugin('postcss-email-important', (options = {}) => (root) => {
  root.walkDecls(decl => {
    if (decl.important)
      decl.raws.important = '!important';
  });
});