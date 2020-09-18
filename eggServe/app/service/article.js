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
}

module.exports = ArticleService;
