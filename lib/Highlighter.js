'use strict';

var _reactTransformHmr2 = require('react-transform-hmr');

var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);

var _react = require('react');

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*eslint-disable no-unused-vars */

var _react2 = _interopRequireDefault(_react);

var _methods = require('./methods');

var _components = {
  _$Unknown: {
    isInFunction: true
  }
};

var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
  filename: 'source/Highlighter.js',
  components: _components,
  locals: [module],
  imports: [_react]
});

function _wrapComponent(uniqueId) {
  return function (ReactClass) {
    return _reactComponentWrapper(ReactClass, uniqueId);
  };
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Highlighter = function Highlighter(ComposedComponent) {
  return (function (_Component) {
    _inherits(_class, _Component);

    function _class(props) {
      _classCallCheck(this, _class2);

      _get(Object.getPrototypeOf(_class2.prototype), 'constructor', this).call(this, props);
      this.state = {
        highlightedText: ''
      };
    }

    _createClass(_class, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _props = this.props;
        var highlight = _props.highlight;
        var text = _props.text;
        var options = _props.options;

        var highlightedText = (0, _methods.createHighlight)(highlight, text, options);
        this.setState({ highlightedText: highlightedText });
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var highlight = nextProps.highlight;
        var text = nextProps.text;
        var options = nextProps.options;

        var highlightedText = (0, _methods.createHighlight)(highlight, text, options);
        this.setState({ highlightedText: highlightedText });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(ComposedComponent, _extends({}, this.props, { highlightedText: this.state.highlightedText }));
      }
    }]);

    var _class2 = _class;
    _class = _wrapComponent('_$Unknown')(_class) || _class;
    return _class;
  })(_react.Component);
};
exports.Highlighter = Highlighter;