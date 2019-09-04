import React, {
  Component,Fragment
} from 'react'
import styles from './index.module.scss'


class EditList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Fragment>
        <div className={styles["tag-list"]}>
          <section >
              <p>标签</p>
              <ul className={styles.tags}>
                  <li className={styles.tag}>标签1</li>
              </ul>
          </section>
          <section>
              <p>标签</p>
              <ul className={styles.tags}>
                <li className="tag-edit">
                  <input type="text"  className={styles["tag-input"]}/>
               <sup>x</sup></li>
               
              </ul>
          </section>
        </div>
        <ul className={styles.list}>
              <li className={styles.article}>
                <header>文章一</header>
                <p>2009年3月19日 </p>  
              </li>
              <li className={styles.article}>
                <header>header</header>
                <p>ce </p>  
              </li>
              <li className={styles.article}>
                <header>header</header>
                <p>ce </p>  
              </li>
            </ul>
      </Fragment>
        )
  }
}
export default EditList
