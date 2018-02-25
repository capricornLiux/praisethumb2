import Koa from 'koa';

// 路由
import router from  'koa-simple-router';

// 模板
import render from 'koa-swig';

import co from 'co';

// 静态文件
import serve from 'koa-static';

import initController from './controller/initController.js';
import Config from './config/config.js';

// 创建实例
const app = new Koa();

// 路由初始化
initController.init(app,router);

// 模板渲染
app.context.render = co.wrap(render({
    root: Config.get('viewDir'),
    autoescape: true,
    cache: 'memory',
    ext: 'html',
  })
);

// 静态资源
app.use(serve(Config.get('staticDir')));

// 监听端口
app.listen(Config.get('port'));

export default app;