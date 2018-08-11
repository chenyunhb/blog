import React from 'react';
import {HashRouter,Route} from 'react-router-dom';
import BlogList from '../connect/blogListConnect';
import BlogContent from '../connect/contentConnect';
import WriteBlog from '../components/blog/writeBlog';
import '../../css/blog/blogIndex.css';

export default class Blog extends React.Component{
  render() {
    return(
      <HashRouter>
    <div className="blog-index">
      <div className="blog">
        <Route path="/blog/index" component={BlogList} />
        <Route path="/blog/content" component={BlogContent} />
        <Route path="/blog/write" component={WriteBlog} />
      </div>
    </div>
      </HashRouter>)
  }
}