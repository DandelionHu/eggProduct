const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async create() {
    const { ctx, app } = this;
    const res = await app.service.article.create(ctx.request.body);
    if (res) {
      ctx.body = {
        status: 200,
        data: res,
      };
    } else {
      ctx.body = {
        status: -1,
        message: '发布文章失败',
      };
    }
  }
}

module.exports = ArticleController

