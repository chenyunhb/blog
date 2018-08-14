import {connect} from 'react-redux';
import BlogTag from '../components/blog/blogTag';
import {showTag} from '../actions/action';

const mapStateToProps = state => ({
  blogs: state.blogs
})

const mapDispatchToProps = dispatch => ({
  onClick: tag => dispatch(showTag(tag))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogTag);