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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 0 10vmin;\n\n  ', '\n'], ['\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 0 10vmin;\n\n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    padding: 0 5vmin;\n  '], ['\n    padding: 0 5vmin;\n  ']);

var Content = _styledComponents2.default.div(_templateObject, _media2.default.phone(_templateObject2));

exports.default = Content;