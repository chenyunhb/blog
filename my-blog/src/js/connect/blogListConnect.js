import {connect} from 'react-redux';
import BlogList from '../components/blog/blogList';
import { blog } from '../actions/action';
import {showFrontEnd,showAllSort} from '../actions/sortType';
import {showJS,showES,showReact,showCss,showAllTag} from '../actions/tagType';

const getBlog= (blogs,sort,tag) => {
  let sortList,tagList;
  switch(sort){
    case showFrontEnd:
    sortList=blogs.filter(blog => blog.sort==='前端');
    break;
    case showAllSort:
    sortList=blogs;
    break;
    default:
    sortList=blogs;
  }
  switch(tag){
    case showJS:
    tagList=blogs.filter(blog => blog.tag.some(value => value==="JavaScript"));
    break;
    case showES:
    tagList=blogs.filter(blog => blog.tag.some(value => value==="ES6"));
    break;
    case showReact:
    tagList=blogs.filter(blog => blog.tag.some(value => value==="React"));
    break;
    case showCss:
    tagList=blogs.filter(blog => blog.tag.some(value => value==="CSS"));
    break;
    case showAllTag:
    tagList=blogs;
    break;
    default:
    tagList=blogs;
  }
  return sortList.filter(blog => tagList.includes(blog));
}

const mapStateToProps=state => ({
  blogs: getBlog(state.blogs,state.sort,state.tag)
});

const mapDispatchToProps = dispatch => ({
  toggleBlog: id => dispatch(blog(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogList);