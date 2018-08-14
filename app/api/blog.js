'use strict';

exports.index = async function () {
	const lastestBlogs = await this.model.Blog.find().sort({
		createdTime: -1,
	}).limit(20);

	this.data = lastestBlogs;
};

exports.show = async function () {
	this.data = await this.model.Blog.findOne({ _id: this.params.id });
};

exports.create = async function () {
	const { title, summary = '', content, category, tags } = this.params;
	const now = new Date();
	const blog = {
		title,
		summary,
		content,
		category,
		tags,
		createTime: now,
		modifyTime: now,
		viewTimes : 0
	};

	const ret = await this.model.Blog.insert(blog);

	this.data = {
		success: true,
		data   : ret
	};
};

exports.update = async function (next) {
	const { id, title, summary = '', content, category, tags } = this.params;
	const now = new Date();
	const updatedBlog = {
		title,
		summary,
		content,
		category,
		tags,
		modifyTime: now,
		viewTimes : 0
	};

	const ret = await this.model.Blog.findOneAndUpdate({ _id: id }, blog, {
		returnNewDocument: true
	});

	this.data = {
		success: true,
		data   : ret
	};
};

exports.destroy = async function (next) {
	const ret = await this.model.Blog.findOneAndDelete({ _id: this.params.id });

	this.data = {
		success: true,
		data   : ret
	};
};
