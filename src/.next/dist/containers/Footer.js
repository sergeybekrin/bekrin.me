'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Link = require('../components/Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sbekrin/Projects/bekrin.me/src/containers/Footer.js';


var FooterContainer = function FooterContainer() {
  return _react2.default.createElement(_Footer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, 'Last update ', process.env.LAST_UPDATE_DATE, _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, ' \u2022 '), _react2.default.createElement(_Link2.default, {
    href: '//github.com/sergeybekrin/bekrin.me',
    trackAs: 'github-source',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, 'View\xA0source'));
};

exports.default = FooterContainer;