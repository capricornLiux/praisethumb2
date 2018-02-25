'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaSimpleRouter = require('koa-simple-router');

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _koaSwig = require('koa-swig');

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _initController = require('./controller/initController.js');

var _initController2 = _interopRequireDefault(_initController);

var _config = require('./config/config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 创建实例


// 路由
var app = new _koa2.default();

// 路由初始化


// 静态文件


// 模板
_initController2.default.init(app, _koaSimpleRouter2.default);

// 模板渲染
app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
    root: _config2.default.get('viewDir'),
    autoescape: true,
    cache: 'memory',
    ext: 'html'
}));

// 静态资源
app.use((0, _koaStatic2.default)(_config2.default.get('staticDir')));

// 监听端口
app.listen(_config2.default.get('port'));
