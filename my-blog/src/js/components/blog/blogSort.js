import React from 'react';
import {showFrontEnd} from '../../actions/sortType';
import PropTypes from 'prop-types'
import '../../../css/blog/blogList.css';
import sortTitle from '../../../img/sort.jpg'
const BlogSort = ({onClick,size}) => (
  <div className="sort">
    <div className="sort-title"><img src={sortTitle} />分类</div>
    <div className="sort-all-list">
      <div onClick={() => onClick(showFrontEnd)} className="sort-list"><a>前端({size})</a></div>
    </div>
  </div>
)

BlogSort.propTypes= {
  onClick: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired
}

export default BlogSort;