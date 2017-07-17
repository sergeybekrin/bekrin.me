'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('/Users/sbekrin/Projects/next.js/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = require('/Users/sbekrin/Projects/next.js/dist/lib/router/index.js');

var _propTypes = require('prop-types');

var _palette = require('../styles/palette');

var _palette2 = _interopRequireDefault(_palette);

var _media = require('../styles/media');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sbekrin/Projects/bekrin.me/src/components/MenuItem.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  align-items: center;\n  display: flex;\n  vertical-align: middle;\n  justify-content: center;\n  margin: 0 1.5em;\n  font-size: 18px;\n\n  ', '\n\n  a {\n    transition: color 200ms ease;\n    text-decoration: none;\n    color: ', ';\n    cursor: ', ';\n    font-weight: bold;\n    white-space: nowrap;\n\n    &:active {\n      outline: none;\n    }\n\n    ', '\n  }\n'], ['\n  align-items: center;\n  display: flex;\n  vertical-align: middle;\n  justify-content: center;\n  margin: 0 1.5em;\n  font-size: 18px;\n\n  ', '\n\n  a {\n    transition: color 200ms ease;\n    text-decoration: none;\n    color: ', ';\n    cursor: ', ';\n    font-weight: bold;\n    white-space: nowrap;\n\n    &:active {\n      outline: none;\n    }\n\n    ', '\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    margin: 0;\n  '], ['\n    margin: 0;\n  ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n      &:hover {\n        color: ', ';\n      }\n    '], ['\n      &:hover {\n        color: ', ';\n      }\n    ']);

var Container = _styledComponents2.default.span(_templateObject, _media2.default.phone(_templateObject2), function (props) {
  return props.active ? (0, _palette2.default)('gray', '700') : (0, _palette2.default)('blue');
}, function (props) {
  return props.active ? 'default' : 'pointer';
}, function (props) {
  return !props.active && (0, _styledComponents.css)(_templateObject3, (0, _palette2.default)('red'));
});

var MenuItem = function MenuItem(_ref) {
  var href = _ref.href,
      children = _ref.children,
      active = _ref.active;
  return _react2.default.createElement(Container, { active: active, __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, _react2.default.createElement(_link2.default, { href: href, prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, children)));
};

/* eslint-disable react/display-name, react/prop-types */
var withActiveFlag = function withActiveFlag(Target) {
  return function (props) {
    return _react2.default.createElement(Target, (0, _extends3.default)({}, props, { active: props.route.pathname === props.href, __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      }
    }));
  };
};
/* eslint-enable */

MenuItem.propTypes = {
  href: _propTypes.string.isRequired,
  children: _propTypes.any.isRequired,
  active: _propTypes.bool.isRequired
};

exports.default = (0, _index.withRoute)(withActiveFlag(MenuItem));