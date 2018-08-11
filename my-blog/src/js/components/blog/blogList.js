import React from 'react';
import PropTypes from 'prop-types';
import Blogs from './blogs';
import {Link} from 'react-router-dom';
import '../../../css/blog/blogList.css'
import writeblog from '../../../img/writeblog.jpg'

const BlogList = ({blogs,toggleBlog}) => (
  <div className="list">
    <div className="list-write"><img src={writeblog} /><Link to="/blog/write">写博客</Link></div>
    {
      blogs.map(blog =>
      <Blogs
    key={blog.id}
    title={blog.title}
    introduction={blog.introduction}
    date={blog.date}
    onClick={() => toggleBlog(blog.id)}
    />
      )}
  </div>
)

BlogList.proptypes={
  toggleBlog:PropTypes.func.isRequired
}

export default BlogList;