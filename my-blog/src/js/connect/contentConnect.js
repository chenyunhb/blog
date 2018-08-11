import {connect} from 'react-redux';
import BlogContent from '../components/blog/blogContent';

const getContent=(blogs,nowId) => (
   blogs.filter(blog => {
    return blog.id===nowId
  })
);

const mapStateToProps=state => ({
  blog: getContent(state.blogs,state.id)
});

export default connect(
  mapStateToProps
)(BlogContent)