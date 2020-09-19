'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {
  async create(params) {
    const { app } = this;
    try {
      const res = await app.mysql.insert('article', params);
      return res;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
  async lists() {
    const { app } = this;
    try {
      const res = await app.mysql.select('article');
      return res;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
  async detail(id) {
    if (!id) {
      console.log('id为空')
      return null;
    }
    const { app } = this;
    try {
      const res = await app.mysql.get('article', { id });
      return res;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}

module.exports = ArticleService;
