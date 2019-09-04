import React, {
  Component
} from 'react'
import styles from './index.module.scss'
import SimpleMDE from 'simplemde'
import 'font-awesome/css/font-awesome.min.css'
import 'simplemde/dist/simplemde.min.css'

class Editor extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.simplemde = new SimpleMDE({
      autoDownloadFontAwesome: false,
      placeholder: 'talk to me',
      spellChecker: false
    })

  }
  render() {
    return (
      <div className="editor">
         <input type="text" className={styles.title} id="title"/>
        <div className={styles["operate-bar"]}>
            <section className= {styles["tag-container"]}>
                <svg className={styles["icon"]} aria-hidden="true">
                    <use xlinkHref="#icon-tag"></use>
                </svg>
                <ul className={styles["tags"]}>
                    <li className={styles["tag"]} >标签
                        <sup>x</sup>
                    </li>
                  </ul> 
          <input type="text" className={styles["tag-input"]} id="tag-input" />

                <span className={styles["tag-add"]} >+</span>
            </section>
            <section className="btn-container">
                <button id="delete" className="delete" >删除文章</button>
                <button id="submit" className="not-del" >发布文章</button>
            </section>
        </div>
        <div className={styles["content"]}>
            <textarea></textarea>
        </div>
    </div>
    )
  }
}
export default Editor
