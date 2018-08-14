import React from 'react';
import PropTypes from 'prop-types';
import '../../../css/blog/content.css'

const BlogContent = ({blog}) => {
 return (
  <div className="content">
    <div className="content-title">{blog[0].title}</div>
    <div className="content-date">{blog[0].date}</div>
    <div dangerouslySetInnerHTML={{__html: blog[0].introduction}}></div>
    <hr/>
    <div dangerouslySetInnerHTML={{__html: blog[0].content}}></div>
  </div>
)}



export default BlogContent;