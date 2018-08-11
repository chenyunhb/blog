import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import '../../../css/blog/blog.css';

const Blogs=({onClick,title,date,introduction}) => (
  <div>
    <div onClick={onClick} className="blog-title"><Link to="/blog/content">{title}</Link></div>
    <p>{introduction}</p>
    <p>{date}</p>
    <hr/>
  </div>
)

Blogs.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  introduction: PropTypes.string.isRequired
}

export default Blogs;