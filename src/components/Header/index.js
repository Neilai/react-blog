import React, {
  Component
} from 'react';
import {
  Link,
  withRouter
} from 'react-router-dom'
import styles from './index.module.scss';

@withRouter
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.toggle=this.toggle.bind(this)
  }
  toggle(){
    this.setState({
      show:!this.state.show 
    });
  }
  getMenu() {
    let {
      pathname
    } = this.props.location
    if (this.state.show) {
      return (
        <nav className={styles["mask-nav"]}>
          <ul className={styles["mask-nav-list"]}>
             <li><Link to='/articles' className={pathname=='/articles'?styles['active']:null }>文章</Link></li>
            <li><Link to='/archives' className={pathname=='/archives'?styles['active']:null }>归档</Link></li>
            <li><Link to='/tags' className={pathname=='/tags'?styles['active']:null }>标签</Link></li>
            <li><Link to='/me' className={pathname=='/me'?styles['active']:null }>关于我</Link></li>
          </ul>
        </nav>
      )
    }
    return null
  }
  render() {
    let {
      pathname
    } = this.props.location
    return (
      <header className={styles["nav-container"]}>
        <nav className={styles["site-nav"]}>
          <p>赖敬之的技术博客</p>
          <ul className={styles["site-nav-list"]}>
            <li><Link to='/articles' className={pathname=='/articles'?styles['active']:null }>文章</Link></li>
            <li><Link to='/archives' className={pathname=='/archives'?styles['active']:null }>归档</Link></li>
            <li><Link to='/tags' className={pathname=='/tags'?styles['active']:null }>标签</Link></li>
            <li><Link to='/me' className={pathname=='/me'?styles['active']:null }>关于我</Link></li>
          </ul>
          <svg className={styles['nav-menu']} aria-hidden="true" onClick={this.toggle}>
            <use xlinkHref="#icon-list"></use>
          </svg>
        </nav>
          {this.getMenu()}
       </header>
    )
  }
}
export default Header
