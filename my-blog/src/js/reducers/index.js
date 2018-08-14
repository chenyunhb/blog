import { combineReducers } from 'redux'
import {showFrontEnd,showAllSort} from '../actions/sortType';
import {showJS,showES,showReact,showCss,showAllTag} from '../actions/tagType';

const blogs=(state=[],action) => {
  switch(action.type) {
    case 'ADD_BLOG':
    return [
      ...state,
      {
        id:action.blogId,
        title:action.blogTitle,
        introduction:action.blogIntroduction,
        content:action.blogContent,
        sort:action.blogSort,
        tag:action.blogTag,
        date:action.blogDate
      }
    ]
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
  {blogs,id,sort,tag}
  );

export default blog;