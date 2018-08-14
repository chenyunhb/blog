import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import '../../../css/blog/blog.css';
import dateImg from '../../../img/date.jpg';
import sortImg from '../../../img/sort.jpg';
import tagImg from '../../../img/tag.jpg';

const Blogs=({onClick,title,date,introduction,sort,tag}) => (
  <div>
    <div onClick={onClick} className="blog-title"><Link to="/blog/content">{title}</Link></div>
    <div dangerouslySetInnerHTML={{__html: introduction}}></div>
    <div className="bloglist">
      <div><img src={dateImg} />{date}</div>
      <div><img src={sortImg} />{sort}</div>
      <div><img src={tagImg} />{tag.join(" ")}</div>
    </div>
    <hr/>
  </div>
)

Blogs.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  introduction: PropTypes.string.isRequired
}

export default Blogs;