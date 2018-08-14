/**
 * ttpiano-web/crawler
 *
 * @Author xianqian.rxq@alibaba-inc.com
 * @Date 2018-03-25
 * @copyright(c) Alibaba Group Holding Limited.
 */

/**
 * ttpiano-web/crawler
 *
 * @Author xianqian.rxq@alibaba-inc.com
 * @Date 2018-03-24
 * @copyright(c) Alibaba Group Holding Limited.
 */

const Crawler = require('crawler');
const Service = require('egg').Service;

const crawler = new Crawler({
	maxConnections: 1,
	rotateUA: true,
	userAgent: [
		'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.45 Safari/537.36',
		'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/604.5.6 (KHTML, like Gecko) Version/11.0.3 Safari/604.5.6',
		'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
		'Mozilla/5.0 (Windows NT 6.3; Win64, x64; Trident/7.0; rv:11.0) like Gecko',
		'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/13.10586',
		'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:52.0) Gecko/20100101 Firefox/52.0',
	],
});

class CrawlerService extends Service {

	async direct(opts) {
		const self = this;
		const { ctx } = this;

		opts = Object.assign({
			skipEventRequest: false,
		}, opts);

		const resPromise = new Promise((resolve, reject) => {
			crawler.direct({
				uri: 'http://news.baidu.com/ns?ct=0&rn=20&ie=utf-8&bs=%22%E9%92%A2%E7%90%B4+%E5%AD%A6%E4%B9%A0%22+-%28%E5%A4%A7%E8%B5%9B+%7C+%E4%BC%98%E6%83%A0+%7C+%E4%BA%8C%E6%89%8B+%7C+%E5%85%8D%E8%B4%B9+%7C+%E6%89%B9%E5%8F%91+%7C+%E5%9F%B9%E8%AE%AD%29&rsv_bp=1&sr=0&cl=2&f=8&prevct=no&tn=news&word=%22%E9%92%A2%E7%90%B4+%E7%BB%83%E4%B9%A0%22+-%28%E5%A4%A7%E8%B5%9B+%7C+%E4%BC%98%E6%83%A0+%7C+%E4%BA%8C%E6%89%8B+%7C+%E5%85%8D%E8%B4%B9+%7C+%E6%89%B9%E5%8F%91+%7C+%E5%9F%B9%E8%AE%AD%29&rsv_sug3=7&rsv_sug4=438&rsv_sug2=0&inputT=2557',
				skipEventRequest: false,
				// This will be called for each crawled page
				callback(error, res) {
					if (error) {
						ctx.logger.error(error);
						reject(error);
					} else {
						const $ = res.$;
						const $newsList = $('#content_left .result');
						const newsList = [];

						$newsList.each((index, item) => {
							const $item = $(item);
							const $title = $item.find('.c-title > a');
							const $summaryImg = $item.find('.c-summary .c_photo > img');
							const $author = $item.find('.c-author');
							const $summary = $item.find('.c-summary');
							// const $info = $item.find('.c-info > a');

							const title = $title.text();
							const authorText = $author.text();
							const authorInfo = self.parseAuthor(authorText)
							const {author, pubTime} = authorInfo;
							let summary = $summary.text();

							summary = summary
								.replace(authorText, '')
								.replace(/百度快照/, '')
								.replace(/\s+查看更多相关新闻>>\s+-/, '');

							const newsItem = {
								title,
								summary,
								summaryImg: $summaryImg.attr('src'),
								author,
								pubTime,
								sourceUrl: $title.attr('href'),
								// snapshotUrl: $info.attr('href'),
								createTime: new Date(),
								modifyTime: new Date(),
							};

							newsList.push(newsItem);
						});

						// $ is Cheerio by default
						// a lean implementation of core jQuery designed specifically for the server
						ctx.logger.info(newsList);

						resolve(newsList);
					}
				},
			});
		});

		return resPromise;
	}

	/**
	 * 格式化author字段
	 *
	 * @param text
	 * @returns {{author: *, pubTime: *}}
	 */
	parseAuthor(text) {
		const authorTextArr = (text || '').split('  ');
		const author = authorTextArr[0];
		const pubTime = this.parsePubtime(authorTextArr[1]);

		return {
			author, pubTime,
		}
	}

	parsePubtime(timeStr) {
		timeStr = timeStr || '';

		try {
			timeStr = timeStr.replace(/年|月/g, '-').replace(/日/, '');
		} catch (err) {
			this.ctx.logger.error(err);
		}

		return new Date(timeStr);
	}

	async save2DB(docs) {
		try {
			const lastestItem = await this.ctx.model.Page.findOne().sort({ pubTime: -1 }).limit(1);

			this.ctx.logger.info(`lastestItem:${JSON.stringify(lastestItem)}`);

			if (lastestItem) {
				const lastestPubTime = lastestItem.pubTime;

				docs = docs.filter(doc => {
					if (doc.pubTime > lastestPubTime) {
						return true;
					}
				});
			}

			if (docs.length > 0) {
				const insertedDocs = await this.ctx.model.Page.insertMany(docs);

				this.ctx.logger.info(`Insert Many docs length:${docs.length}`);
			} else {
				this.ctx.logger.info(`No more news`);
			}
		} catch (err) {
			this.ctx.logger.error(err);
		}

	}

	async directAndSave2DB() {
		try {
			const docs = await this.direct();

			await this.save2DB(docs);

			return docs;
		} catch (err) {
			this.ctx.logger.error(err);
		}
	}
}

module.exports = CrawlerService;
