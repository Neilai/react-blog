import axios from 'axios'
import * as constants from './constants'
import {
  fromJS
} from 'immutable';
const changeArticleList = (result) => ({
  type: constants.CHANGE_ARTICLE_LIST,
  articleList: result
})
const changeArticleTags = (oldValue, newValue) => ({
  type: constants.CHANGE_ARTICLE_TAGS,
  oldValue: oldValue,
  newValue: newValue
})
const deleteTag = (v) => ({
  type: constants.DELETE_TAG,
  value: v
})
export const changeTag = (v) => ({
  type: constants.CHANGE_TAG,
  value: v
})
export const changeContent = (v) => ({
  type: constants.CHANGE_CONTENT,
  value: v
})
export const changeTitle = (v) => ({
  type: constants.CHANGE_TITLE,
  value: v
})
export const chooseArticle = (v) => ({
  type: constants.CHOOSE_ARTICLE,
  value: v
})
//export const deleteArticle = (v) => ({
  //type: constants.DELETE_ARTICLE,
  //id: v
//})
export const deleteRemoteArticle = (v) => {
  return (dispatch) => {
    axios.delete(
      `/articles/${v}`, {
        headers: {
            Authorization: `Bearer ${localStorage.token}`
          }
        })
      .then(()=>{
        dispatch(getArticles())
       })
      .catch(err => alert(err))
  }
}
//export const setTag = (v) => {
//return (dispatch, getState) => {
//let id = getState().getIn(['EditList', 'activeId'])
//axios.put(
//`/tags/${id}`, {
//tags: v
//}, {
//headers: {
//Authorization: `Bearer ${localStorage.token}`
//}
//}
//)
//dispatch(changeTag(v))
//}
//}
export const getArticles = () => {
  return (dispatch) => {
    axios.get('/articles').then((res) => {
      dispatch(chooseArticle(-1))
      dispatch(changeArticleList(res.data))
    })
  }
}
export const addArticle = () => {
  return (dispatch) => {
    let updateId
    axios.post(
        '/articles', {}, {
          headers: {
            Authorization: `Bearer ${localStorage.token}`
          }
        })
      .then(res => {
        updateId = res.data.insertId
        return axios.get('/articles')
      })
      .then(res => {
        dispatch(changeArticleList(res.data))
        dispatch(chooseArticle(updateId))
      })
      .catch(err => {
        alert(err.message)
      })
  }
}

export const deleteRemoteTag = (o) => {
  return (dispatch, getState) => {
    let articleList = getState().getIn(['EditList', 'articleList'])
    let promises = []
    let isDelete = true
    articleList.map(v => v.update('tags', v => v.split(',')))
      .map((v, i) => {
        if (v.get('tags').indexOf(o) !== -1) {
          let index = v.get('tags').indexOf(o)
          if (index !== -1) {
            if (v.get('tags').length === 1) {
              console.log('删除失败')
              isDelete = false
            } else isDelete && dispatch(deleteTag(o))
          }
        }
      })
  }
}
export const changeRemoteTags = (o, n) => {
  return (dispatch, getState) => {
    let articleList = getState().getIn(['EditList', 'articleList'])
    let promises = []

    articleList.map((v) => v.update('tags', v => v.split(',')))
      .map((v, i) => {
        if (v.get('tags').indexOf(o) !== -1) {
          let index = v.get('tags').indexOf(o)
          if (v.get('tags').indexOf(n) !== -1) {
            v.get('tags').splice(index, 1)
            promises.push(
              axios.put(
                `/tags/${v.get('id')}`, {
                  tags: v.get('tags').join(',')
                }, {
                  headers: {
                    Authorization: `Bearer ${localStorage.token}`
                  }
                }
              )
            )
          } else {
            v.get('tags').splice(index, 1, n)
            promises.push(
              axios.put(
                `/tags/${v.get('id')}`, {
                  tags: v.get('tags').join(',')
                }, {
                  headers: {
                    Authorization: `Bearer ${localStorage.token}`
                  }
                }
              )
            )
          }
        }
      })

    Promise.all(promises).then(() => {
      dispatch(changeArticleTags(o, n))
    }).catch(err => alert(err))
  }
}
