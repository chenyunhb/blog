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

  const BlogSchema = new Schema({
    title: { type: String },
    summary: { type: String },
    content: {type: String},
		category: {type: String},
		tags: {type: Array},
    createTime: { type: Date, default: Date.now() },
    modifyTime: { type: Date, default: Date.now() },
    viewTimes: { type: Number },
  });

  return mongoose.model('Blog', BlogSchema);
};
