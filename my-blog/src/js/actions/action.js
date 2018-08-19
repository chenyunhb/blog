export const addBlog=(title,introduction,content,sort,tag) => (dispatch) =>{
  fetch('http://127.0.0.1:7001/api/blog',{
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: title,
      summary: introduction,
      content: content,
      category: sort,
      tags: tag,
      createTime: new Date(),
      modifyTime: new Date(),
      viewTimes: 0
    })
  }).then(res => res.json())
  .catch(error => console.log('Error:',error))
  .then(response => {
  console.log('success:',response);
  dispatch({type:'ADD_BLOG',data:response.data.data})
})
}

export const getAllBlog = () => (dispatch) => {
  fetch('http://127.0.0.1:7001/api/blog',{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(res => res.json())
    .catch(error => console.log('Error:', error))
    .then(response => {
      console.log('success:', response);
      dispatch({ type: 'GET_ALLBLOG', data: response.data })
    })
};

export const update= (title,summary,content,category,tags,createTime,viewTimes,id,index) => (dispatch) =>{
  fetch('http://127.0.0.1:7001/api/blog/'+id,{
    method:'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      title:title,
      summary:summary,
      content:content,
      category:category,
      tags:tags,
      createTime:createTime,
      modifyTime:new Date(),
      viewTimes:viewTimes})
  }).then(res => res.json())
    .catch(error => console.log('Error:', error))
    .then(response => {
      console.log('success:', response);
    })
};

export const deleteBlog= id => (dispatch) => {
  fetch('http://127.0.0.1:7001/api/blog/'+id,{
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(res => res.json())
    .catch(error => console.log('Error:', error))
    .then(response => {
      console.log('success:', response);
      dispatch({ type: 'DELETE_BLOG', id: id })
    })
};

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

export const updateId=(id) => ({
  type:'UPDATE_ID',
  id:id
})