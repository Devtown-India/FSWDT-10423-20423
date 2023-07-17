"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.random = void 0;
var _uuid = require("uuid");
// import nanoid from 'nanoid'

var random = () => (0, _uuid.v4)();
exports.random = random;