'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _typestyle = require('typestyle');

var _csstips = require('csstips');

var csstips = _interopRequireWildcard(_csstips);

var _Layout = require('../containers/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sbekrin/Projects/bekrin.me/src/components/ErrorSection.js';


var styles = {
  container: (0, _typestyle.style)(csstips.flex, csstips.vertical, csstips.centerCenter),
  message: (0, _typestyle.style)({
    fontSize: '3rem'
  })
};

var ErrorSection = function ErrorSection(_ref) {
  var message = _ref.message;
  return _react2.default.createElement(_Layout2.default, { title: message, __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement('div', { className: styles.container, __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement(_Text2.default, {
    className: styles.message,
    bold: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, '\uD83D\uDE31', ' ', message)));
};

ErrorSection.propTypes = {
  message: _propTypes.string.isRequired
};

exports.default = ErrorSection;