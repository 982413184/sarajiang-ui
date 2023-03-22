"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _sarajiangUi = require("sarajiang-ui");
require("../style");
var _default = function _default() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: '10px'
    }
  }, /*#__PURE__*/_react.default.createElement(_sarajiangUi.Alert, {
    kind: "info"
  }, "\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u63D0\u793A")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: '10px'
    }
  }, /*#__PURE__*/_react.default.createElement(_sarajiangUi.Alert, {
    kind: "positive"
  }, "\u8FD9\u662F\u4E00\u6761\u6210\u529F\u63D0\u793A")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: '10px'
    }
  }, /*#__PURE__*/_react.default.createElement(_sarajiangUi.Alert, {
    kind: "warning"
  }, "\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u63D0\u793A")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: '10px'
    }
  }, /*#__PURE__*/_react.default.createElement(_sarajiangUi.Alert, {
    kind: "negative"
  }, "\u8FD9\u662F\u4E00\u6761\u9519\u8BEF\u63D0\u793A")));
};
exports.default = _default;