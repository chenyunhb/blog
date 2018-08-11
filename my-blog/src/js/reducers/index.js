import { combineReducers } from 'redux'

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

const blog=combineReducers(
  {blogs,id}
  );

export default blog;