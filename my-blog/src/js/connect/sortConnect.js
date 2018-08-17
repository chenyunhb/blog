import {connect} from 'react-redux';
import BlogSort from '../components/blog/blogSort';
import {showSort} from '../actions/action';

const getSize = (blogs) => {
  return blogs.filter(blog => blog.category==="前端").length;
}

const mapStateToProps = state => ({
  size: getSize(state.blogs)
})

const mapDispatchToProps = dispatch => ({
  onClick: (sort) => dispatch(showSort(sort))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogSort);