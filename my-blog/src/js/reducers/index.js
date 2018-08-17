import { combineReducers } from 'redux'
import {showFrontEnd,showAllSort} from '../actions/sortType';
import {showJS,showES,showReact,showCss,showAllTag} from '../actions/tagType';

const blogs=(state=[],action) => {
  switch(action.type) {
    case 'ADD_BLOG':
    return [
      ...state,
      action.data
    ]
    case 'GET_ALLBLOG':
    return action.data
    case 'UPDATE_BLOG':
    let blog=state[action.index];
    blog.title=action.data.title;
    blog.summary=action.data.summary;
    blog.content=action.data.content;
    blog.category=action.data.category;
    blog.tags=action.data.tags;
    blog.createTime=action.data.createTime;
    blog.modifyTime=action.data.modifyTime;
    blog.viewTimes=action.data.viewTimes;
    state[action.index]=blog;
    return state
    case 'DELETE_BLOG':
      return state.filter(blog => !(blog._id === action.id))
    default:
    return state
  }
}

const id=(state=0,action) => {
  switch(action.type) {
    case 'BLOG':
    return action.id
    default:
    return state
  }
}

const updateid=(state=0,action) => {
  switch(action.type) {
    case 'UPDATE_ID':
    return action.id
    default:
    return state
  }
}

const sort=(state=showAllSort,action) => {
  switch(action.type) {
    case showFrontEnd:
    return showFrontEnd
    case showAllSort:
    return showAllSort
    default:
    return state
  }
}

const tag=(state=showAllTag,action) => {
  switch(action.type) {
    case showES:
    return showES
    case showJS:
    return showJS
    case showReact:
    return showReact
    case showCss:
    return showCss
    case showAllTag:
    return showAllTag
    default:
    return state
  }
}

const blog=combineReducers(
  {blogs,id,sort,tag,updateid}
  );

export default blog;