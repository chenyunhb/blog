import React from 'react';
import {connect} from 'react-redux';
import {addBlog} from '../../actions/action';
import '../../../css/blog/write.css'

const WriteBlog=({dispatch}) => {
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
        <div><p>内容:</p><textarea rows="20" cols="150" ref={node => inputContent=node} /></div>
        <button type="submit" className="write-button">发布博客</button>
      </form>
    </div>
  )
}


export default connect()(WriteBlog);