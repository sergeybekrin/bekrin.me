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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  padding: 1.5em 10vmin;\n  color: ', ';\n\n  ', '\n'], ['\n  padding: 1.5em 10vmin;\n  color: ', ';\n\n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    padding: 1em 0;\n  '], ['\n    padding: 1em 0;\n  ']);

var Header = _styledComponents2.default.header(_templateObject, (0, _palette2.default)('white'), _media2.default.phone(_templateObject2));

exports.default = Header;