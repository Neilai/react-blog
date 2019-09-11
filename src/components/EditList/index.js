import React, {
  Component,
  Fragment
} from 'react'
import styles from './index.module.scss'
import {
  connect
} from 'react-redux'
import moment from 'moment'
import {
  getArticles,
  changeRemoteTags,
  deleteRemoteTag,
  chooseArticle
} from '@/pages/admin/home/list/store/actionCreators.js'
import {
  List
} from 'immutable'
@connect(state => ({
  articleList: state.getIn(['EditList', 'articleList']),
  activeId: state.getIn(['EditList', 'activeId'])
}), {
  getArticles,
  changeRemoteTags,
  deleteRemoteTag,
  chooseArticle
})
class EditList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenTags: []
    }
    this.changeTags.bind(this)
    this.deleteRemoteTag.bind(this)
  }
  componentDidMount() {
    moment.locale('zh-CN')
    this.props.getArticles()
  }
  changeTags(e,i){
     let {
      chosenTags
    } = this.state
    if(!e.target.value){
      alert('不能为空')
      return 
    }
    this.props.changeRemoteTags(chosenTags[i],e.target.value)
    this.setState({
      chosenTags:this.state.chosenTags.map((value,index)=>i==index ?e.target.value:value)
    })
  }
  toggleTags(v) {
    let {
      chosenTags
    } = this.state
    if (chosenTags.indexOf(v) == -1)
      this.setState({
        chosenTags: [...chosenTags, v]
      })
    else {
      this.setState({
        chosenTags: chosenTags.filter(item => item !== v)
      })
    }
  }
  deleteRemoteTag(v,i){
    let {
      chosenTags
    } = this.state
   if(window.confirm('你确定要删除该标签吗？'))
    { 
        this.setState({
          chosenTags:chosenTags.filter(item=>item!==v)
        })
        this.props.deleteRemoteTag(v)
    } 
  }
  renderChosenTags() {
    let {
      chosenTags
    } = this.state
    if (chosenTags.length) {
      return (
        <section>
          <p>修改标签</p>
            <ul className={styles.tags}>
                {
                  chosenTags.map((v,i)=>(
                    <li className={styles["tag-edit"]} key={i}>
                      <input type="text" value={v} className={styles["tag-input"]} onChange={(e)=>this.changeTags(e,i)}/>
                      <sup onClick={(e)=>this.deleteRemoteTag(v,i)}>x</sup>
                    </li>
                  ))
                }
           </ul>
       </section>
      )
    }
    return null
  }
  render() {
    let tags = this.props.articleList.reduce((acc, item, index) => {
      item.get('tags').split(',').filter(v => v).forEach((v, i) => {
        if (acc.indexOf(v) == -1) acc = acc.push(v)
      })
      return acc
    }, List())
    let {
      chosenTags
    } = this.state
    return (
      <Fragment>
        <div className={styles["tag-list"]}>
          <section >
              <p>标签</p>
              <ul className={styles.tags} >
                {
                  tags.map((v,i)=>(
                    <li className={`${styles.tag} ${chosenTags.indexOf(v)==-1?'':styles.chosen}`} key={v} onClick={this.toggleTags.bind(this,v)}>{v}</li>
                  ))
                }
               </ul>
           </section>
          {
            this.renderChosenTags()
          }
         </div>
        <ul className={styles.list}>
            {
              this.props.articleList
              .filter(item => chosenTags.every((v) => item.get('tags').split(',').indexOf(v)!==-1))
              .map((v)=>(
                <li className={`${styles.article} ${v.get('isPublished')?styles.published:''} ${v.get('id')==this.props.activeId?styles.active:''}`} key={v.get('id')} onClick={()=>this.props.chooseArticle(v.get('id'))}>
                <header>{v.get('title')}</header>
                <p>{ moment(v.get('createTime')).format('YYYY年 MMM DD日 HH:mm:ss')} </p>  
              </li>
              ))
            }
         </ul>
      </Fragment>
    )
  }
}
export default EditList
