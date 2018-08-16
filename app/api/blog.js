'use strict';

exports.index = async function () {
	const lastestBlogs = await this.model.Blog.find().sort({
		createdTime: -1,
	}).limit(20);

	this.data = lastestBlogs;
};

exports.show = async function () {
	const { id } = this.params;

	this.data = await this.model.Blog.findOne({ _id: id });
};

exports.create = async function () {
	const { title, summary = '', content, category, tags } = this.request.body;
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

	const ret = await this.model.Blog.create(blog);

	this.data = {
		success: true,
		data   : ret
	};
};

exports.update = async function (next) {
	const { id } = this.params;
	const { title, summary = '', content, category, tags } = this.request.body;
	const now = new Date();
	const updatedBlog = {
		title,
		summary,
		content,
		category,
		tags,
		modifyTime: now,
	};

	const ret = await this.model.Blog.findOneAndUpdate({ _id: id }, updatedBlog, {
		returnNewDocument: true
	});

	this.data = {
		success: true,
		data   : ret
	};
};

exports.destroy = async function (next) {
	const { id } = this.params;
	const ret = await this.model.Blog.deleteOne({ _id: id });

	this.data = {
		success: true,
		data   : ret
	};
};
