import {connect} from 'react-redux';
import BlogList from '../components/blog/blogList';
import { blog,updateId,deleteBlog } from '../actions/action';
import {showFrontEnd,showAllSort} from '../actions/sortType';
import {showJS,showES,showReact,showCss,showAllTag} from '../actions/tagType';

const getBlog= (blogs,sort,tag) => {
  let sortList,tagList;
  switch(sort){
    case showFrontEnd:
    sortList=blogs.filter(blog => blog.category==='前端');
    break;
    case showAllSort:
    sortList=blogs;
    break;
    default:
    sortList=blogs;
  }
  switch(tag){
    case showJS:
    tagList=blogs.filter(blog => blog.tags.some(value => value==="JavaScript"));
    break;
    case showES:
    tagList=blogs.filter(blog => blog.tags.some(value => value==="ES6"));
    break;
    case showReact:
    tagList=blogs.filter(blog => blog.tags.some(value => value==="React"));
    break;
    case showCss:
    tagList=blogs.filter(blog => blog.tags.some(value => value==="CSS"));
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
  toggleBlog: id => (dispatch(blog(id)),dispatch(updateId(id))),
  Update: id => dispatch(updateId(id)),
  Delete: id => dispatch(deleteBlog(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogList);