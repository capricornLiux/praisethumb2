'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _indexModel = require('../models/indexModel.js');

var _indexModel2 = _interopRequireDefault(_indexModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var indexController = {
    index: function index() {
        // 使用async/await
        return async function (ctx, next) {
            ctx.body = await ctx.render('index.html', { title: '大拇指点赞' });
        };
    },
    update: function update() {
        return async function (ctx, next) {
            var indexM = new _indexModel2.default(ctx);
            ctx.body = await indexM.updateNum();
        };
    }
};

exports.default = indexController;
