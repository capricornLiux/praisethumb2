const Config = new Map();
// import path from 'path';
const path = require('path');
// 端口
Config.set('port', 3000);
Config.set('staticDir', path.join(__dirname, '..','public'));
Config.set('viewDir', path.join(__dirname, '..','views'));

export default Config;
