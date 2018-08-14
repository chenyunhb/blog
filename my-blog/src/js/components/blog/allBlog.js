import React from 'react';
import PropTypes from 'prop-types';
import {showAllSort} from '../../actions/sortType';
import {showAllTag} from '../../actions/tagType';
import '../../../css/blog/blogList.css'

const AllBlog = ({onClick}) => (
  <div onClick={() => onClick(showAllSort,showAllTag)} className="all-blog">
    <a className="all-blog-title">所有文章</a>
  </div>
)

AllBlog.propTypes= {
  onClick: PropTypes.func.isRequired
}

export default AllBlog;