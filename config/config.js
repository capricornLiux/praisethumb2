'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Config = new Map();
// import path from 'path';
var path = require('path');
// 端口
Config.set('port', 3000);
Config.set('staticDir', path.join(__dirname, '..', 'public'));
Config.set('viewDir', path.join(__dirname, '..', 'views'));;

exports.default = Config;
