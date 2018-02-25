import indexController from './indexController.js';
const initController = {
    // 初始化路由
    init(app, router) {
        app.use(router(_ => {
            _.get('/index/index', indexController.index());
            _.get('/index/update', indexController.update());
        }))
    }
}

export default initController;