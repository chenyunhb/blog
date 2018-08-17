import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import '../../../css/blog/blog.css';
import dateImg from '../../../img/date.jpg';
import sortImg from '../../../img/sort.jpg';
import tagImg from '../../../img/tag.jpg';

const Blogs=({onClick,onClickUpdate,onClickDelete,title,summary,category,tags,modifyTime}) => (
  <div>
    <div className="blog-all">
    <div onClick={onClick} className="blog-title"><Link to="/blog/content">{title}</Link></div>
    <div>
    <div onClick={onClickUpdate}><Link to="/blog/update">编辑</Link></div>
        <div onClick={onClickDelete}><a className="blog-delete">删除</a></div>
      </div>
    </div>
    <div dangerouslySetInnerHTML={{__html: summary}}></div>
    <div className="bloglist">
      <div><img src={dateImg} />{modifyTime.substring(0,10)}</div>
      <div><img src={sortImg} />{category}</div>
      <div><img src={tagImg} />{tags.join(" ")}</div>
    </div>
    <hr/>
  </div>
)

Blogs.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
}

export default Blogs;