import indexModel from '../models/indexModel.js';
const indexController = {
    index() {
        // 使用async/await
        return async(ctx, next) => {
            ctx.body = await ctx.render('index.html', {title: '大拇指点赞'})
        }
    },
    update() {
        return async(ctx, next) => {
            const indexM = new indexModel(ctx);
            ctx.body = await indexM.updateNum();
        }
    } 
}

export default indexController;