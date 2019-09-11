import React, {
  Component
} from 'react'
import styles from './index.module.scss'
//import 'font-awesome/css/font-awesome.min.css'
//import 'simplemde/dist/simplemde.min.css'
//import SimpleMDE from 'simplemde'
import {
  connect
} from 'react-redux'
import {
  changeTitle,
  changeContent,
  changeTag,
  deleteRemoteArticle
} from '@/pages/admin/home/list/store/actionCreators.js'
import axios from 'axios'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

@connect(state => ({
  articleList: state.getIn(['EditList', 'articleList']),
  activeId: state.getIn(['EditList', 'activeId'])
}), {
  changeTitle,
  changeContent,
  changeTag,
  deleteRemoteArticle
})
class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      tagValue: ''
    }
    this.addTag = this.addTag.bind(this)
    this.showInput = this.showInput.bind(this)
    this.onKeyup = this.onKeyup.bind(this)
    this.deleteTag = this.deleteTag.bind(this)
  }
  componentDidMount() {
    //this.simplemde = new SimpleMDE({
    //autoDownloadFontAwesome: false,
    //placeholder: 'Talk to me',
    //spellChecker: false,
    //autofocus:true,
    //autoSaveLtrue
    //})
    //this.simplemde.codemirror.on('change', () => {
    //this.props.changeContent(this.simplemde.value())
    //})
  }
  updateArticle({
    title,
    tags,
    content
  }) {
    var tags = tags.join(',')
    axios.put(
        `/articles/update/${this.props.activeId}`, {
          title,
          tags,
          content,
        }, {
          headers: {
            Authorization: `Bearer ${localStorage.token}`
          }
        })
      .then(() => alert('保存成功'))
      .catch((e) => alert(e))
  }
  deleteArticle(id) {
    if (window.confirm('你确定要删除这篇文章吗？')) {
      this.props.deleteRemoteArticle(id)
    }
  }
  publishArticle({
    title,
    tags,
    content
  }) {
    var tags = tags.join(',')
    axios.put(
        `/articles/publish/${this.props.activeId}`, {
          title,
          tags,
          content,
          isPublished: 1
        }, {
          headers: {
            Authorization: `Bearer ${localStorage.token}`
          }
        })
      .then(() => alert('发表成功'))
      .catch((e) => alert(e))
  }
  showInput() {
    this.setState({
      show: true
    })
  }
  deleteTag(i) {
    var article = this.props.articleList.find(v => v.get('id') === this.props.activeId)
    var tags = article.get('tags').split(',').filter(Boolean)
    tags.splice(i, 1)
    this.props.changeTag(tags.join(','))
  }
  onKeyup(e) {
    if (e.keyCode === 13) {
      var article = this.props.articleList.find(v => v.get('id') === this.props.activeId)
      var tags = article.get('tags').split(',').filter(Boolean)
      if (tags.includes(this.state.tagValue)) {
        this.setState({
          show: false,
          tagValue: ''
        })
        return
      }
      tags.push(this.state.tagValue)
      this.props.changeTag(tags.join(','))
      this.setState({
        show: false,
        tagValue: ''
      })
    }
  }
  addTag(e) {
    if (!e.target.value) {
      this.setState({
        show: false,
        tagValue: ''
      })
    } else {
      this.setState({
        tagValue: e.target.value
      })
    }
  }
  render() {
    let choose = this.props.activeId !== -1
    if (choose) {
      var article = this.props.articleList.find(v => v.get('id') === this.props.activeId)
      var tags = article.get('tags').split(',')
      var content = article.get('content')
      var title = article.get('title')
      var createTime = article.get('createTime')
      //this.simplemde.value(content)
    }
    return (
      <div className="editor">
        <input type="text" className={styles.title} value={title} onChange={(e)=>this.props.changeTitle(e.target.value)} id="title"/>
        <div className={styles["operate-bar"]}>
            <section className= {styles["tag-container"]}>
                <svg className={styles["icon"]} aria-hidden="true">
                    <use xlinkHref="#icon-tag"></use>
                  </svg>
                <ul className={styles["tags"]}>
                {
                  tags&&tags.filter(Boolean).map((v,i)=>(
                        <li className={styles["tag"]} key={v}>{v}
                        <sup onClick={()=>this.deleteTag(i)}>x</sup>
                        </li>
                  ))
                }
                </ul> 
                {this.state.show?<input type="text" value={this.state.tagValue} onKeyUp={this.onKeyup} onChange={(e)=>this.addTag(e)}className={styles["tag-input"]} id="tag-input"/>:
                    <span  className={styles["tag-add"]} onClick={this.showInput} >+</span>
}
            </section>
            <section className="btn-container">
              <button id="delete" className="delete" onClick={()=>this.deleteArticle(this.props.activeId)} >删除文章</button>
                <button id="save" className="not-del" onClick={()=>this.updateArticle({title,tags,content})}>保存文章</button>
                <button id="submit" className="not-del" onClick={()=>this.publishArticle({title,tags,content})}>发布文章</button>
            </section>
        </div>
        <div className={styles["content"]}>
          <SimpleMDE key={createTime} value={content} onChange={this.props.changeContent} />
        </div>
    </div>
    )
  }
}
export default Editor
