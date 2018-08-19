import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import '../../../css/blog/content.css'

const BlogContent = ({Delete,blog}) => {
 return (
  <div className="content">
     <div className="content-change">
       <div><Link to="/blog/update">编辑</Link></div>
       <div onClick={() => Delete(blog._id)}><Link to="/blog/index" className="content-delete">删除</Link></div>
     </div>
    <div className="content-title">{blog.title}</div>
     <div className="content-date">{blog.modifyTime.substring(0,10)}</div>
    <div dangerouslySetInnerHTML={{__html: blog.summary}}></div>
    <hr/>
    <div dangerouslySetInnerHTML={{__html: blog.content}}></div>
  </div>
)}

BlogContent.propTypes={
  Delete: PropTypes.func.isRequired
}


export default BlogContent;