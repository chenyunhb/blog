/**
 * ttpiano-web/crawler.test
 *
 * @Author xianqian.rxq@alibaba-inc.com
 * @Date 2018-03-24
 * @copyright(c) Alibaba Group Holding Limited.
 */

const mm = require('egg-mock');
const assert = require('assert');

it('should schedule work fine', async () => {
  const app = mm.app();
  await app.ready();
  await app.runSchedule('crawler');
});
