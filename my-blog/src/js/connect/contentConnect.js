import {connect} from 'react-redux';
import BlogContent from '../components/blog/blogContent';
import {deleteBlog} from '../actions/action';

const getContent=(blogs,nowId) => (
   blogs[nowId]
);

const mapStateToProps=state => ({
  blog: getContent(state.blogs,state.id),
});

const mapDispatchToProps=dispatch => ({
  Delete: id => dispatch(deleteBlog(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogContent)