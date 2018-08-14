import React from 'react';
import {connect} from 'react-redux';
import {addBlog} from '../../actions/action';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'
import '../../../css/blog/write.css'

/*const WriteBlog=({dispatch}) => {
  let inputTitle,inputIntroduction,inputContent;

  return (
    <div className="write">
      <form onSubmit={e => {
        e.preventDefault();
        if(!inputTitle.value.trim()||!inputIntroduction.value.trim()||!inputContent.value.trim()){
          return
        }
        dispatch(addBlog(inputTitle.value,inputIntroduction.value,inputContent.value))
        inputTitle.value='';
        inputIntroduction.value='';
        inputContent.value='';
      }}>
        <div><p>标题:</p><input size="40" ref={node => inputTitle = node} /></div>
        <div><p>简介:</p><textarea rows="5" cols="150" ref={node => inputIntroduction = node} /></div>
        <div><p>内容:</p><textarea rows="20" cols="150" ref={node => inputContent = node} /></div>
        <button type="submit" className="write-button">发布博客</button>
      </form>
    </div>
  )
}*/
class WriteBlog extends React.Component {
  constructor() {
    super()

    this.state= {
      titleValue:'',
      introductionValue:'',
      contentValue:'',
      sortValue:'',
      tagValue:[]
    }
  }
  render() {
    const {dispatch} = this.props;
    return (
      <div className="write">
        <div className="write-text"><input type="text" onChange={e => this.titleChange(e)} placeholder="标题" className="write-text-input" /></div>
        <div className="write-radio">
          <div>分类:</div>
          <div><input type="radio" name="sortList" value="前端" onChange={e => this.sortChange(e)}/>前端</div>
          <div><input type="radio" name="sortList" value="后端" onChange={e => this.sortChange(e)} />后端</div>
          <div>标签:</div>
          <div><input type="checkbox" name="tagList" value="JavaScript" onChange={e => this.tagChange(e)} />JavaScript</div>
          <div><input type="checkbox" name="tagList" value="ES6" onChange={e => this.tagChange(e)} />ES6</div>
          <div><input type="checkbox" name="tagList" value="React" onChange={e => this.tagChange(e)} />React</div>
          <div><input type="checkbox" name="tagList" value="CSS" onChange={e => this.tagChange(e)} />CSS</div>
        </div>
        <div className="write-editor"><BraftEditor onHTMLChange={e => this.introductionChange(e)} placeholder="摘要" height={100} /></div>
        <div className="write-editor"><BraftEditor onHTMLChange={e => this.contentChange(e)} placeholder="内容" /></div>
        <div className="write-button" onClick={e => this.blogChange(e)}><input type="button" value="发布博客" className="write-button-input" /></div>
      </div>
    )
  }

  titleChange(e){
    return this.state.titleValue=e.target.value;
  }
  introductionChange(e){
    return this.state.introductionValue=e;
  }
  contentChange(e){
    return this.state.contentValue=e;
  }
  sortChange(e){
    return this.state.sortValue=e.target.value;
  }
  tagChange(e){
    let value=e.target.value;
    if(this.state.tagValue.some(tag => tag===value)){
      this.state.tagValue=this.state.tagValue.filter(tag => !(tag===value));
    }else{
      this.state.tagValue.push(value);
    }
  }
  blogChange(e){
    if (!this.state.titleValue || !this.state.introductionValue || !this.state.contentValue || !this.state.sortValue || !this.state.tagValue){
      return
    }
    this.props.dispatch(addBlog(this.state.titleValue, this.state.introductionValue, this.state.contentValue,this.state.sortValue,this.state.tagValue))
    this.state.titleValue='';
    this.state.introductionValue='';
    this.state.contentValue='';
    this.state.sortValue='';
  }

}

export default connect()(WriteBlog);