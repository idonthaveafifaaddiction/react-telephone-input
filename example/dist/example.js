require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
}

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactTelephoneInputSimple = require('react-telephone-input-simple');

var _reactTelephoneInputSimple2 = _interopRequireDefault(_reactTelephoneInputSimple);

console.log('ReactTelephoneInput: ', _reactTelephoneInputSimple2['default']);
var App = _react2['default'].createClass({
    displayName: 'App',

    render: function render() {
        return _react2['default'].createElement('div', null, _react2['default'].createElement(_reactTelephoneInputSimple2['default'], { defaultCountry: 'us', preferredCountries: ['us', 'ca', 'zz', 'hk'] }));
    }
});

_reactDom2['default'].render(_react2['default'].createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-dom":undefined,"react-telephone-input-simple":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yZWFjdC1jb21wb25lbnQtZ3VscC10YXNrcy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2ZhdC9Xb3Jrc3BhY2UvcmVhY3QtdGVsZXBob25lLWlucHV0L2V4YW1wbGUvc3JjL2V4YW1wbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxZQUFZLENBQUM7O0FBRWIsU0FBUyxzQkFBc0IsQ0FBQyxHQUFHLEVBQUU7QUFBRSxXQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQztDQUFFOztBQUVqRyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBRkYsT0FBTyxDQUFBLENBQUE7O0FBSXpCLElBQUksT0FBTyxHQUFHLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUU3QyxJQUFJLFNBQVMsR0FBRyxPQUFPLENBTEYsV0FBVyxDQUFBLENBQUE7O0FBT2hDLElBQUksVUFBVSxHQUFHLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxDQUFDOztBQUVuRCxJQUFJLDBCQUEwQixHQUFHLE9BQU8sQ0FSUiw4QkFBOEIsQ0FBQSxDQUFBOztBQVU5RCxJQUFJLDJCQUEyQixHQUFHLHNCQUFzQixDQUFDLDBCQUEwQixDQUFDLENBQUM7O0FBUnJGLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUEsMkJBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBc0IsQ0FBQztBQUMxRCxJQUFJLEdBQUcsR0FBRyxPQUFBLENBQUEsU0FBQSxDQUFBLENBQU0sV0FBVyxDQUFDO0FBV3hCLGVBQVcsRUFBRSxLQUFLOztBQVZsQixVQUFNLEVBQUEsU0FBQSxNQUFBLEdBQUc7QUFDTCxlQUNJLE9BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxhQUFBLENBWUEsS0FBSyxFQUNMLElBQUksRUFaQSxPQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsYUFBQSxDQUFBLDJCQUFBLENBQUEsU0FBQSxDQUFBLEVBQUEsRUFBcUIsY0FBYyxFQUFDLElBQUksRUFBQyxrQkFBa0IsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFBLENBQUksQ0FDdkYsQ0FDUjtLQUNMO0NBQ0osQ0FBQyxDQUFDOztBQUVILFVBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBUyxNQUFNLENBQUMsT0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLGFBQUEsQ0FBQyxHQUFHLEVBQUEsSUFBQSxDQUFHLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBSZWFjdFRlbGVwaG9uZUlucHV0IGZyb20gJ3JlYWN0LXRlbGVwaG9uZS1pbnB1dC1zaW1wbGUnXG5cbmNvbnNvbGUubG9nKCdSZWFjdFRlbGVwaG9uZUlucHV0OiAnLCBSZWFjdFRlbGVwaG9uZUlucHV0KTtcbnZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8UmVhY3RUZWxlcGhvbmVJbnB1dCBkZWZhdWx0Q291bnRyeT0ndXMnIHByZWZlcnJlZENvdW50cmllcz17Wyd1cycsICdjYScsICd6eicsICdoayddfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIl19
