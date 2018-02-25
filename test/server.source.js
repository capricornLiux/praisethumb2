import request from 'supertest';
import app from '../app.es.js';
function sr() {
    return request(app.listen());
}

// 编写测试用例
describe('测试用例集', function () {
    it('点赞加一接口测试', function (done) {
        sr()
            .get('/index/update')
            .expect(200)
            .end(function (err, res) {
                if (res.data == 1) return done(err);
                done();
            })
    })
})