import {createStore} from 'redux';
import blog from '../reducers/index';
const initialState={
  blogs:[{
    id:0,
    title:"我的标题",
    introduction:"我的简介",
    content:"我的内容",
    date:"2018-8-11",
  }, {
      id: 1,
      title: "我的标题",
      introduction: "我的简介",
      content: "我的内容",
      date: "2018-8-11",
    }, {
      id: 2,
      title: "我的标题",
      introduction: "我的简介",
      content: "我的内容",
      date: "2018-8-11",
    }, {
      id: 3,
      title: "我的标题",
      introduction: "我的简介",
      content: "我的内容",
      date: "2018-8-11",
    }],
  id:0
}
const store=createStore(blog,initialState);
export default store;