import React, {
  Component
} from 'react'
import styles from './index.module.scss'
import {
  NavLink,
} from 'react-router-dom'

class Sidebar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <aside className={styles["side-nav"]} >
        <NavLink to="/admin/home/list" className={styles["link"]} activeClassName={styles["selected"]}>
          <svg className={styles["icon"]} aria-hidden="true">
            <use xlinkHref="#icon-list"></use>
          </svg>
           <p className={styles["descript"]}>列表</p>
           </NavLink>
           <NavLink to="/admin/home/me" className={styles["link"]} activeClassName={styles["selected"]}>
          <svg className={styles["icon"]} aria-hidden="true">
            <use xlinkHref="#icon-me"></use>
          </svg>
           <p className={styles["descript"]}>我</p>
        </NavLink>
      </aside>
    )
  }
}
export default Sidebar
