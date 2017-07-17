'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    @media (max-width: ', 'em) {\n      ', '\n    }\n  '], ['\n    @media (max-width: ', 'em) {\n      ', '\n    }\n  ']);

function createFromTemplate(maxWidth) {
  return function (styles) {
    return (0, _styledComponents.css)(_templateObject, maxWidth / 16, _styledComponents.css.apply(undefined, (0, _toConsumableArray3.default)(styles)));
  };
}

function phone() {
  for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }

  return createFromTemplate(376)(styles);
}

function tablet() {
  for (var _len2 = arguments.length, styles = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    styles[_key2] = arguments[_key2];
  }

  return createFromTemplate(768)(styles);
}

function desktop() {
  for (var _len3 = arguments.length, styles = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    styles[_key3] = arguments[_key3];
  }

  return createFromTemplate(992)(styles);
}

exports.default = { phone: phone, tablet: tablet, desktop: desktop };