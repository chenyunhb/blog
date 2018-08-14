import React from 'react';
import PropTypes from 'prop-types';
import Blogs from './blogs';
import {Link} from 'react-router-dom';
import '../../../css/blog/blogList.css'
import writeblog from '../../../img/writeblog.jpg'
import SortConnect from '../../connect/sortConnect';
import AllConnect from '../../connect/allConnect';
import TagConnect from '../../connect/tagConnect';

const BlogList = ({blogs,toggleBlog}) => (
  <div className="list">
  <div className="blog">
      <div className="list-write"><div><img src={writeblog} /><Link to="/blog/write">写博客</Link></div></div>
      <div className="blogs">
    {
      blogs.map(blog =>
      <Blogs
    key={blog.id}
    title={blog.title}
    introduction={blog.introduction}
    date={blog.date}
    sort={blog.sort}
    tag={blog.tag}
    onClick={() => toggleBlog(blog.id)}
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