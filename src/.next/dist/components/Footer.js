'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _media = require('../styles/media');

var _media2 = _interopRequireDefault(_media);

var _palette = require('../styles/palette');

var _palette2 = _interopRequireDefault(_palette);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  text-align: center;\n  padding: 5vmin 10vmin;\n  background-color: ', ';\n  color: ', ';\n\n  ', '\n'], ['\n  text-align: center;\n  padding: 5vmin 10vmin;\n  background-color: ', ';\n  color: ', ';\n\n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    font-size: 18px;\n  '], ['\n    font-size: 18px;\n  ']);

var Footer = _styledComponents2.default.footer(_templateObject, (0, _palette2.default)('white'), (0, _palette2.default)('gray', '500'), _media2.default.tablet(_templateObject2));

exports.default = Footer;