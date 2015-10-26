/*eslint-disable  consistent-return */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var createRegEx = function createRegEx(text, caseSensitive) {
  return new RegExp(text.trim(), caseSensitive ? 'g' : 'gi');
};

exports.createRegEx = createRegEx;
var createHTMLString = function createHTMLString(HTMLString, reg, highlightClass) {
  return HTMLString.replace(reg, function (str) {
    return '<span class="' + highlightClass + '">' + str + '</span>';
  });
};

exports.createHTMLString = createHTMLString;
var createHighlight = function createHighlight(highlight, text, options) {
  var caseSensitive = options.caseSensitive;
  var highlightClass = options.highlightClass;

  var toHighlight = highlight.split(' ');
  var HTMLString = text;

  if (toHighlight.length > 1) {
    toHighlight.forEach(function (highlightElement) {
      if (highlightElement === '' || highlightElement === '') return;

      var reg = createRegEx(highlightElement, caseSensitive);
      HTMLString = createHTMLString(HTMLString, reg, highlightClass);
    });
    return HTMLString;
  } else {
    if (highlight === '' || highlight === ' ') return text;
    var reg = createRegEx(highlight, caseSensitive);
    HTMLString = createHTMLString(HTMLString, reg, highlightClass);
    return HTMLString;
  }
};
exports.createHighlight = createHighlight;