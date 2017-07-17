'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Menu = require('../components/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = require('../components/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _MenuSeparator = require('../components/MenuSeparator');

var _MenuSeparator2 = _interopRequireDefault(_MenuSeparator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sbekrin/Projects/bekrin.me/src/containers/Header.js';


var HeaderContainer = function HeaderContainer() {
  return _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_Menu2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_MenuItem2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, 'About me'), _react2.default.createElement(_MenuSeparator2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement(_MenuItem2.default, { href: '/projects', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, 'Projects'), _react2.default.createElement(_MenuSeparator2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement(_MenuItem2.default, { href: '/contacts', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'Contacts')));
};

exports.default = HeaderContainer;