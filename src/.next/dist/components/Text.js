'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _media = require('../styles/media');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  line-height: 1.75;\n  margin: 1em 0;\n\n  ', '\n\n  ', '\n\n  ', '\n'], ['\n  line-height: 1.75;\n  margin: 1em 0;\n\n  ', '\n\n  ', '\n\n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    line-height: 1.5;\n  '], ['\n    line-height: 1.5;\n  ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    color: #2e2e2e;\n  '], ['\n    color: #2e2e2e;\n  ']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n    font-size: 1.25rem;\n  '], ['\n    font-size: 1.25rem;\n  ']);

var Text = _styledComponents2.default.p(_templateObject, _media2.default.phone(_templateObject2), function (props) {
  return props.hero && (0, _styledComponents.css)(_templateObject3);
}, function (props) {
  return props.intro && (0, _styledComponents.css)(_templateObject4);
});

Text.propTypes = {
  hero: _propTypes.bool,
  intro: _propTypes.bool,
  children: _propTypes.any
};

exports.default = Text;