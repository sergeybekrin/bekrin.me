'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('/Users/sbekrin/Projects/next.js/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactGa = require('react-ga');

var _palette = require('../styles/palette');

var _palette2 = _interopRequireDefault(_palette);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sbekrin/Projects/bekrin.me/src/components/Link.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  text-decoration: none;\n  transition: color 200ms ease;\n\n  &:hover {\n    color: ', ';\n  }\n\n  ', '\n'], ['\n  color: ', ';\n  text-decoration: none;\n  transition: color 200ms ease;\n\n  &:hover {\n    color: ', ';\n  }\n\n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    white-space: nowrap;\n  '], ['\n    white-space: nowrap;\n  ']);

var Link = function Link(_ref) {
  var href = _ref.href,
      trackAs = _ref.trackAs,
      props = (0, _objectWithoutProperties3.default)(_ref, ['href', 'trackAs']);

  var extra = trackAs ? { to: href, eventLabel: trackAs } : { href: href };
  var Tag = trackAs ? _reactGa.OutboundLink : 'a';
  var child = _react2.default.createElement(Tag, (0, _extends3.default)({}, props, extra, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }));
  return trackAs ? child : _react2.default.createElement(_link2.default, { href: href, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, child);
};

var StyledLink = (0, _styledComponents2.default)(Link)(_templateObject, (0, _palette2.default)('blue'), (0, _palette2.default)('red'), function (props) {
  return props.nowrap && (0, _styledComponents.css)(_templateObject2);
});

Link.propTypes = {
  href: _propTypes.string,
  nowrap: _propTypes.bool,
  trackAs: _propTypes.string
};

exports.default = StyledLink;