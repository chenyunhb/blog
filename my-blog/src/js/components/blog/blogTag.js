import React from 'react';
import PropTypes from 'prop-types';
import {showJS,showES,showReact,showCss} from '../../actions/tagType';
import '../../../css/blog/blogList.css';
import tagTitle from '../../../img/tag.jpg'

const BlogTag = ({onClick,blogs}) => (
  <div className="tag">
    <div className="sort-title"><img src={tagTitle} />标签</div>
    <div className="tag-all-list">
    <div onClick={() => onClick(showJS)} className="tag-list-div"><a className="tag-list">JavaScript({blogs.filter(blog => blog.tags.some(value => value==="JavaScript")).length})</a></div>
      <div onClick={() => onClick(showES)} className="tag-list-div"><a className="tag-list">ES6({blogs.filter(blog => blog.tags.some(value => value === "ES6")).length})</a></div>
      <div onClick={() => onClick(showReact)} className="tag-list-div"><a className="tag-list">React({blogs.filter(blog => blog.tags.some(value => value === "React")).length})</a></div>
      <div onClick={() => onClick(showCss)} className="tag-list-div"><a className="tag-list">CSS({blogs.filter(blog => blog.tags.some(value => value === "CSS")).length})</a></div>
    </div>
  </div>
)

BlogTag.propTypes= {
  onClick: PropTypes.func.isRequired
}

export default BlogTag;