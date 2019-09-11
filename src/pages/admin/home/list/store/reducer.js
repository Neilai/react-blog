import {
  fromJS
} from 'immutable';
import * as constants from './constants'
const defaultState = fromJS({
  articleList: [],
  activeId:-1,
  });
function stringToArray(article){
  return article.update('tags',v=>fromJS(v.split(',')))
}
function arrayToString(article){
  return article.update('tags',v=>fromJS(v.join(',')))
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_ARTICLE_LIST:
      return state.merge({
        articleList:fromJS(action.articleList)
      })   
    case constants.CHANGE_ARTICLE_TAGS:
      return state.merge({articleList:
        state.get('articleList')
        .map(stringToArray)   
        .map((v,i)=>{
          if(v.get('tags').indexOf(action.oldValue)!==-1){
            let index=v.get('tags').indexOf(action.oldValue)
            if(v.get('tags').indexOf(action.newValue)!==-1)  return v.update('tags',tags=>tags.splice(index,1))
            else return v.update('tags',tags=> tags.splice(index,1,action.newValue))
          }
          return v
        })
        .map(arrayToString)
      })
    case constants.DELETE_TAG:
      return state.merge({articleList:
        state.get('articleList')
        .map(stringToArray)   
        .map((v,i)=>{
          if(v.get('tags').indexOf(action.value)!==-1){
            let index=v.get('tags').indexOf(action.value)
            return v.update('tags',tags=> tags.splice(index,1))
          }
          return v
        })
        .map(arrayToString)
      })
    case constants.CHOOSE_ARTICLE:
      return state.set('activeId',action.value)
    case constants.CHANGE_TITLE:
      var index=state.get('articleList').findIndex(v=>v.get('id')==state.get('activeId'))
      return state.setIn(['articleList',index,'title'],action.value)
    case constants.CHANGE_CONTENT:
      var index=state.get('articleList').findIndex(v=>v.get('id')==state.get('activeId'))
      return state.setIn(['articleList',index,'content'],action.value)
      case constants.CHANGE_TAG:
      var index=state.get('articleList').findIndex(v=>v.get('id')==state.get('activeId'))
      return state.setIn(['articleList',index,'tags'],action.value)

    default:
      return state
  }

}
