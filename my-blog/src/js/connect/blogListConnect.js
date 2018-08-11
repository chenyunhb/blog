import {connect} from 'react-redux';
import BlogList from '../components/blog/blogList';
import { blog } from '../actions/action';

const mapStateToProps=state => ({
  blogs: state.blogs
});

const mapDispatchToProps = dispatch => ({
  toggleBlog: id => dispatch(blog(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogList);