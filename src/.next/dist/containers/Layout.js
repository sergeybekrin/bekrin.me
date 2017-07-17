'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _reactGa = require('react-ga');

var _reactGa2 = _interopRequireDefault(_reactGa);

var _head = require('/Users/sbekrin/Projects/next.js/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Content = require('./Content');

var _Content2 = _interopRequireDefault(_Content);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sbekrin/Projects/bekrin.me/src/containers/Layout.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  :root {\n    -webkit-font-smoothing: antialiased;\n    font-family: Helvetica, Arial, sans-serif;\n    font-size: 20px;\n    line-height: 1.5;\n    box-sizing: border-box;\n    min-width: 320px;\n    cursor: default;\n  }\n\n  body {\n    margin: 0;\n  }\n'], ['\n  :root {\n    -webkit-font-smoothing: antialiased;\n    font-family: Helvetica, Arial, sans-serif;\n    font-size: 20px;\n    line-height: 1.5;\n    box-sizing: border-box;\n    min-width: 320px;\n    cursor: default;\n  }\n\n  body {\n    margin: 0;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  min-height: 100vh;\n  width: 100vw;\n'], ['\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  min-height: 100vh;\n  width: 100vw;\n']);

(0, _styledComponents.injectGlobal)(_templateObject);

var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Layout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call.apply(_ref, [this].concat(args))), _this), _this.theme = {}, _this.state = {
      useAltFavicon: false
    }, _this.toggleFavicon = function () {
      _this.setState({ useAltFavicon: document.hidden });
    }, _this.triggerPageView = function () {
      if (!window.IS_GA_INITIALIZED) {
        window.IS_GA_INITIALIZED = true;
        (0, _reactGa.initialize)('UA-19088106-7', {
          debug: process.env.NODE_ENV === 'development'
        });
      }
      _reactGa2.default.set({ page: window.location.pathname });
      _reactGa2.default.pageview(window.location.pathname);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Layout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('visibilitychange', this.toggleFavicon);
      this.triggerPageView();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('visibilitychange', this.toggleFavicon);
    }
  }, {
    key: 'renderFavicon',
    value: function renderFavicon(favicon) {
      return _react2.default.createElement('link', { rel: 'icon', type: 'image/png', href: '/static/' + favicon + '.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var useAltFavicon = this.state.useAltFavicon;

      var _props = this.props,
          title = _props.title,
          children = _props.children,
          props = (0, _objectWithoutProperties3.default)(_props, ['title', 'children']);

      var formattedTitle = title ? title + ' \u2014 Sergey Bekrin' : 'Sergey Bekrin, a Software Engineer';

      return _react2.default.createElement(_styledComponents.ThemeProvider, { theme: this.theme, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement('div', (0, _extends3.default)({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }), _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, formattedTitle), _react2.default.createElement('link', { rel: 'dns-prefetch', href: '//google-analytics.com', __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), _react2.default.createElement('link', { rel: 'dns-prefetch', href: '//www.google-analytics.com', __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), this.renderFavicon(useAltFavicon ? 'favicon-alt' : 'favicon')), _react2.default.createElement(_Header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), _react2.default.createElement(_Content2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, children), _react2.default.createElement(_Footer2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      })));
    }
  }]);

  return Layout;
}(_react.Component);

Layout.propTypes = {
  children: _propTypes.any.isRequired,
  title: _propTypes.string
};

exports.default = (0, _styledComponents2.default)(Layout)(_templateObject2);