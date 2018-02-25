'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _appEs = require('../app.es.js');

var _appEs2 = _interopRequireDefault(_appEs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sr() {
    return (0, _supertest2.default)(_appEs2.default.listen());
}

// var supertest = request(app.listen(3000));

// 编写测试用例
describe('测试用例集', function () {
    it('点赞加一接口测试', function (done) {
        sr().get('/index/update').expect(200).end(function (err, res) {
            if (res.data == 1) return done(err);
            done();
        });
    });
});
