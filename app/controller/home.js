'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
  	const lastestNews = await this.ctx.model.Page.find().sort({
			pubTime: -1,
		}).limit(20);

    await this.ctx.render('index.ejs', {
			lastestNews,
		});
  }
}

module.exports = HomeController;
