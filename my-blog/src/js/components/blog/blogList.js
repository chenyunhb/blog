import React from 'react';
import PropTypes from 'prop-types';
import Blogs from './blogs';
import {Link} from 'react-router-dom';
import '../../../css/blog/blogList.css'
import writeblog from '../../../img/writeblog.jpg'
import SortConnect from '../../connect/sortConnect';
import AllConnect from '../../connect/allConnect';
import TagConnect from '../../connect/tagConnect';

const BlogList = ({blogs,toggleBlog,Update,Delete}) => (
  <div className="list">
  <div className="blog">
      <div className="list-write"><div><img src={writeblog} alt="写博客" /><Link to="/blog/write">写博客</Link></div></div>
      <div className="blogs">
    {
      blogs.map((blog,id) =>
      <Blogs
    key={id}
    title={blog.title}
    summary={blog.summary}
    modifyTime={blog.modifyTime}
    category={blog.category}
    tags={blog.tags}
    onClick={() => toggleBlog(id)}
    onClickUpdate={() => Update(id)}
    onClickDelete={() => Delete(blog._id)}
    />
      )}
      </div>
    </div>
    <div className="list-sort">
    <AllConnect />
    <SortConnect />
    <TagConnect />
    </div>
  </div>
)

BlogList.proptypes={
  toggleBlog:PropTypes.func.isRequired
}

export default BlogList;