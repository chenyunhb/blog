import {connect} from 'react-redux';
import AllBlog from '../components/blog/allBlog';
import {showSort,showTag} from '../actions/action';

const mapDispatchToProps = dispatch => ({
  onClick: (sort,tag) => (dispatch(showSort(sort)),dispatch(showTag(tag)))
})

export default connect(
  '',
  mapDispatchToProps
)(AllBlog);