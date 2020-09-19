'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async create() {
    const { ctx } = this;
    const params = {
      ...ctx.request.body,
    }
    const res = await ctx.service.article.create(params);
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
  async lists() {
    const { ctx } = this;
    const res = await ctx.service.article.lists();
    if (res) {
      ctx.body = {
        code: 2000,
        message: '获取成功',
        isSuccess: true,
        returnValue: res,
      };
    } else {
      ctx.body = {
        code: -1,
        isSuccess: false,
        message: '获取列表失败',
      };
    }
  }
  async detail() {
    const { ctx } = this;
    const res = await ctx.service.article.detail(ctx.params.id);
    if (res) {
      ctx.body = {
        status: 200,
        data: res,
      };
    } else {
      ctx.body = {
        status: -1,
        message: '查询文章详情页失败',
      };
    }
  }
}

module.exports = ArticleController

