import React, {
  Component
} from 'react'
import styles from './index.module.scss'


class HomeHeader extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <nav className={styles["head-nav"]}>
        <div className={styles["content-container"]}>
            <section>
                <h4 className="title">
                    我的博客后台
                </h4>
            </section>
            <a className={styles["log-out"]}>
                 <svg className="icon" aria-hidden="true">
                   <use xlinkHref="#icon-logout"></use>
                 </svg>
              <span>&nbsp;登出</span>
            </a>
        </div>
    </nav>
    )
  }
}
export default HomeHeader
