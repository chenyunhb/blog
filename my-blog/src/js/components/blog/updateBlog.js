import React from 'react';
import { connect } from 'react-redux';
import { update,getAllBlog } from '../../actions/action';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'
import '../../../css/blog/write.css'

class WriteBlog extends React.Component {
  constructor() {
    super()

    this.state = {
      titleValue: '',
      introductionValue: '',
      contentValue: '',
      sortValue: '',
      tagValue: [],
      bool: true
    }
  }
  render() {
    const { blog,id } = this.props;
    return (
      <div className="write">
        <div className="write-text"><input type="text" onChange={e => this.titleChange(e)} placeholder="标题" defaultValue={this.props.blog.title} className="write-text-input" /></div>
        <div className="write-radio">
          <div>分类:</div>
          <div><input type="radio" name="sortList" value="前端" onChange={e => this.sortChange(e)} defaultChecked={this.props.blog.category==="前端"} />前端</div>
          <div><input type="radio" name="sortList" value="后端" onChange={e => this.sortChange(e)} defaultChecked={this.props.blog.category==="后端"} />后端</div>
          <div>标签:</div>
          <div><input type="checkbox" name="tagList" value="JavaScript" onChange={e => this.tagChange(e)} defaultChecked={this.props.blog.tags.some(tag => tag==="JavaScript")} />JavaScript</div>
          <div><input type="checkbox" name="tagList" value="ES6" onChange={e => this.tagChange(e)} defaultChecked={this.props.blog.tags.some(tag => tag==="ES6")} />ES6</div>
          <div><input type="checkbox" name="tagList" value="React" onChange={e => this.tagChange(e)} defaultChecked={this.props.blog.tags.some(tag => tag==="React")} />React</div>
          <div><input type="checkbox" name="tagList" value="CSS" onChange={e => this.tagChange(e)} defaultChecked={this.props.blog.tags.some(tag => tag==="CSS")} />CSS</div>
        </div>
        <div className="write-editor"><BraftEditor onHTMLChange={e => this.introductionChange(e)} contentFormat="html" placeholder="摘要" initialContent={this.props.blog.summary} height={100} /></div>
        <div className="write-editor"><BraftEditor onHTMLChange={e => this.contentChange(e)} contentFormat="html" placeholder="内容" initialContent={this.props.blog.content} /></div>
        <div className="write-button" onClick={e => this.blogChange(e)}><input type="button" value="发布博客" className="write-button-input" /></div>
      </div>
    )
  }

  titleChange(e) {
    return this.state.titleValue = e.target.value;
  }
  introductionChange(e) {
    return this.state.introductionValue = e;
  }
  contentChange(e) {
    return this.state.contentValue = e;
  }
  sortChange(e) {
    return this.state.sortValue = e.target.value;
  }
  tagChange(e) {
    if(this.state.bool){
      this.state.tagValue=this.props.blog.tags;
      this.state.bool=false;
    }
    let value = e.target.value;
    if (this.state.tagValue.some(tag => tag === value)) {
      this.state.tagValue = this.state.tagValue.filter(tag => !(tag === value));
    } else {
      this.state.tagValue.push(value);
    }
  }
  blogChange(e) {
    if(!this.state.titleValue){
      this.state.titleValue=this.props.blog.title;
    }
    if(!this.state.introductionValue){
      this.state.introductionValue=this.props.blog.summary;
    }
    if(!this.state.contentValue){
      this.state.contentValue=this.props.blog.content;
    }
    if(!this.state.sortValue){
      this.state.sortValue=this.props.blog.category;
    }
    if(this.state.bool){
      this.state.tagValue=this.props.blog.tags;
      };
    this.props.dispatch(update(this.state.titleValue, this.state.introductionValue, this.state.contentValue, this.state.sortValue, this.state.tagValue,this.props.blog.createTime,this.props.blog.viewTimes,this.props.blog._id,this.props.index))
    this.props.dispatch(getAllBlog())
    this.state.titleValue = '';
    this.state.introductionValue = '';
    this.state.contentValue = '';
    this.state.sortValue = '';
    this.state.tagValue=[];
  }

}

const mapStateToProps = state => ({
  blog:state.blogs[state.updateid],
  index: state.updateid
})

export default connect(mapStateToProps)(WriteBlog);