/**
 * ttpiano-web/page
 *
 * @Author xianqian.rxq@alibaba-inc.com
 * @Date 2018-03-24
 * @copyright(c) Alibaba Group Holding Limited.
 */

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
	// const conn = app.mongooseDB.get('page');

  const PageSchema = new Schema({
    title: { type: String },
    summary: { type: String },
    summaryImg: { type: String },
    author: { type: String },
    pubTime: { type: Date },
    sourceUrl: { type: String },
    snapshotUrl: { type: String },
    createTime: { type: Date, default: Date.now() },
    modifyTime: { type: Date, default: Date.now() },
    viewTimes: { type: Number },
  });

  return mongoose.model('Page', PageSchema);
};
