import React, {
  Component
} from 'react'
import styles from './index.module.scss'
import Editor from '@/components/Editor'
import EditList from '@/components/EditList'
import {
  connect
} from 'react-redux'
import {
  addArticle
 } from './store/actionCreators.js'

@connect(null,{addArticle})
class List extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={styles["main"] + ' list-container'}>
          <p>文章列表 /
              <span>ARTICLE LIST</span>
            </p>
          <hr/>
          <main className={styles["panel"]}>
            <div className={styles["article-list"]}>
              <section className="btn-container">
                   <button id="add" className="not-del" onClick={this.props.addArticle}>新文章</button>
              </section>
             <EditList/>
            </div>
            <Editor/>
          </main>
      </div>
    )
  }
}
export default List
