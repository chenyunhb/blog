/**
 * blog/xdr
 *
 * @Author xianqian.rxq@alibaba-inc.com
 * @Date 2018-08-15
 * @copyright(c) Alibaba Group Holding Limited.
 */

module.exports = options => {
	return async function xhr(ctx, next) {

		if (ctx.path.startsWith('/api/')) {
			ctx.set('Access-Control-Allow-Origin', '*');
		}

		await next();
	};
};
