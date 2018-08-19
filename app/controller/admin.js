/**
 * ttpiano-web/$$admin$$
 *
 * @Author xianqian.rxq@alibaba-inc.com
 * @Date 2018-03-24
 * @copyright(c) Alibaba Group Holding Limited.
 */

'use strict';

const Controller = require('egg').Controller;
const Crawler = require('crawler');

class AdminController extends Controller {
	async index() {
		this.ctx.body = 'hi, egg';
	}

	async crawler() {
		const ret = await this.ctx.service.crawler.directAndSave2DB();

		this.ctx.body = ret;
	}

	async empty() {
		const ret = await this.ctx.model.Page.drop();

		this.ctx.body = ret;
	}
}

module.exports = AdminController;
