import {createStore} from 'redux';
import blog from '../reducers/index';
const initialState={
  blogs:[{
    id:0,
    title:"我的标题",
    introduction:"我的简介",
    content:"白领，一般是指那些有技能的人士，比如管理人员、财务人员、金融业者、律师等等，劳动主要以智力投入为主。通常需要坐在办公室里，衣着整洁，穿白衬衫，所以叫做白领。以前，白领是令人羡慕的工作，家长期待自己的孩子成为白领。可是，信息技术高速发展，机器的判断能力和处理能力，使得很多办公室职位变得不必要了。美国曾经有一种工作，叫做“税务顾问”（tax consultant）。因为税法非常复杂，普通人根本搞不清楚，所以你会请他帮你报税。这样就不用自己填写复杂的表格，而且他还会告诉你各种节税诀窍。可是，现在有报税网站和软件，你只要在电脑前回答几个问题，电脑就会告诉你应该如何报税，简单、快速又便宜。那些税务顾问发现，自己没法与软件竞争，只能纷纷转业。这个职业在美国已经开始消失了。",
    date:"2018-8-11",
    sort:"前端",
    tag:["JavaScript","ES6"]
  }, {
      id: 1,
      title: "我的标题",
      introduction: "我的简介",
      content: "我的内容",
      date: "2018-8-11",
      sort: "后端",
      tag: ["JavaScript"]
    }, {
      id: 2,
      title: "我的标题",
      introduction: "我的简介",
      content: "我的内容",
      date: "2018-8-11",
      sort: "前端",
      tag: ["ES6"]
    }, {
      id: 3,
      title: "我的标题",
      introduction: "我的简介",
      content: "我的内容",
      date: "2018-8-11",
      sort: "前端",
      tag: ["React"]
    }, {
      id: 4,
      title: "我的标题",
      introduction: "我的简介",
      content: "我的内容",
      date: "2018-8-11",
      sort: "前端",
      tag: ["JavaScript"]
    }, {
      id: 5,
      title: "我的标题",
      introduction: "我的简介",
      content: "我的内容",
      date: "2018-8-11",
      sort: "前端",
      tag: ["JavaScript"]
    }, {
      id: 6,
      title: "我的标题",
      introduction: "我的简介",
      content: "我的内容",
      date: "2018-8-11",
      sort: "前端",
      tag: ["JavaScript"]
    },],
  id:0
}
const store=createStore(blog,initialState);
export default store;