'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _palette = require('../styles/palette');

var _palette2 = _interopRequireDefault(_palette);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  background-color: ', ';\n  height: 2.25rem;\n  width: 2px;\n'], ['\n  background-color: ', ';\n  height: 2.25rem;\n  width: 2px;\n']);

var MenuSeparator = _styledComponents2.default.span.attrs({
  'aria-hidden': true
})(_templateObject, (0, _palette2.default)('gray', 200));

exports.default = MenuSeparator;