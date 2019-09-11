import React, {
  Component,
  Fragment
} from 'react';
import styles from './index.module.scss';
import axios from 'axios';
import {
  Link
} from 'react-router-dom';
import Header from '@/components/Header';
import moment from 'moment';
class Tags extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: [],
      introductions: {}
    }
    this.goAnchor = this.goAnchor.bind(this)
  }
  componentDidMount() {
    let tags = []
    let introductions = {}
    axios.get('/introductions')
      .then(res => {
        for (let intro of res.data) {
          intro.tags = intro.tags ? intro.tags.split(',') : []
          intro.publishTime = moment(intro.publishTime).format('MM-DD')
          for (let tag of intro.tags) {
            if (tags.indexOf(tag) === -1) {
              tags.push(tag)
              introductions[tag] = []
            }
            introductions[tag].push(intro)
          }
        }
        this.setState({
          tags,
          introductions
        });
      })
      .catch(err => alert(err))
  }
  goAnchor(id) {
    let anchor= document.getElementById(id)
    document.documentElement.scrollTop = anchor.offsetTop
    document.body.scrollTop = anchor.offsetTop
  }
  render() {
    return (
      <Fragment>
        <Header></Header>
        <div className={styles['main-container']}>
          <div className={styles["tag-container"]}>
            <h2>标签</h2>
            <nav>
              <ul className={styles["tags"]}>
                  {
                    this.state.tags.map(v=>(
                      <li key={v} onClick={()=>this.goAnchor(v)}><a hreaf='javascript:void(0)'>{v}</a></li>
                    ))
                  }
              </ul>
              <ul className={styles["tag-list"]}>
                  {
                    this.state.tags.map(v=>(
                      <li key={v} id={v}>
                        <span>{v}</span>
                        <ul>
                            {
                              this.state.introductions[v].map(item=>(
                                <li key={item.publishTime}>
                                    <Link to={`/article/${item.id}`}>{item.title}</Link>
                                      &nbsp; &nbsp;
                                    <span className='time'>{item.publishTime}</span>
                                </li>
                              ))
                            }
                        </ul>
                      </li>
                    ))
                  }
              </ul>
            </nav>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Tags
