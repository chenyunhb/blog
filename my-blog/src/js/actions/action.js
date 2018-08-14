let blogId=7;
const formatDate = function (date) {
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  return y + '-' + m + '-' + d ;
};
export const addBlog=(title,introduction,content,sort,tag) => ({
  type:'ADD_BLOG',
  blogTitle:title,
  blogIntroduction:introduction,
  blogContent:content,
  blogSort: sort,
  blogTag: tag,
  blogDate:(new Date()).toLocaleDateString(),
  blogId:blogId++
})

export const blog=(id) => ({
  type:'BLOG',
  id:id
})

export const showSort=(sort) => ({
  type: sort
})

export const showTag=(tag) => ({
  type: tag
})