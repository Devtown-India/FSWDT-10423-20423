"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.random = void 0;
var _uuid = require("uuid");
var _nanoid = require("nanoid");
var random = () => (0, _nanoid.nanoid)();
exports.random = random;