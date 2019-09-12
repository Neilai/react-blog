import React, {
  Component,
  Fragment
} from 'react';
import {
  Link
} from 'react-router-dom';
import styles from './index.module.scss';
import {
  is,
  fromJS
} from 'immutable';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import axios from 'axios';
import moment from 'moment';
import parseMarkdown from '@/util/parseMarkdown.js'
class Articles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
    this.prevPage = this.prevPage.bind(this)
    this.nextPage = this.nextPage.bind(this)
    this.queryObject = {
      'page': 0
    }
  }
  nextPage() {
    this.props.history.push({
      pathname: '/articles',
      search: `?page=${this.queryObject.page+1}`
    })
  }
  prevPage() {
    this.props.history.push({
      pathname: '/articles',
      search: `?page=${this.queryObject.page-1}`
    })
  }
  getArticleList() {
    let query = this.props.location.search
    if (query) {
      query.substr(1).split('&').map(v => {
        let _ = v.split('=')
        this.queryObject[_[0]] = parseInt(_[1])
      })
    }
    axios.get(`articles?isPublished=1&offset=${this.queryObject.page}&limit=5`)
      .then(res => {
        const pattern = /<!-- more -->/i
        for (let article of res.data.articles) {
          article.publishTime = moment(article.publishTime).format('YYYY年 MMM DD日 HH:mm:ss')
          pattern.test(article.content)
          article.content = RegExp['$`']
        }
        this.maxPage = res.data.maxPage
        this.setState({
          articles: res.data.articles
        });
      })
      .catch(err => alert(err))
  }

  componentDidUpdate(nextProps, nextState) {
    if (this.props.location.search !== nextProps.location.search)
      this.getArticleList()
  }
  shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
  }
  componentDidMount() {
    this.getArticleList()
  }
  render() {
    return (
      <Fragment>
      <Header></Header>
      <div className='main-container'>
         <div className={styles["articlelist-container"]}>
            <div className={styles["article-list"]}>
                {
                  this.state.articles.map((v,i)=>(  
                 <article key={v.publishTime}>
                      <header>
                        <h2>
                        <Link to={`/article/${v.id}`} className={styles['title']}>{v.title}</Link>
                        </h2>
                        <p className={"time"}>{v.publishTime}</p>
                      </header>
                      <p className={styles["abstract"]} dangerouslySetInnerHTML={{ __html:parseMarkdown(v.content)}}></p>
                      <footer>
                        <Link className={styles["read-more"]}  to={`/article/${v.id}`}>... continue reading</Link>
                      </footer>
                </article>

                  ))
                }
            </div>
            <div className={styles["pagination"]}>
                {
                  this.queryObject.page==0?null:
                  (
                    <span className={styles["prev"]} onClick={this.prevPage}>←
                      <a >上一页</a>
                     </span>
                    )
                }
               {

                  this.queryObject.page==this.maxPage-1?null:
                  (
                    <span className={styles["next"]} onClick={this.nextPage}l>
                      <a>下一页</a>
                        </span>
                  )
               }
            </div>
          </div>
      </div>
        <Footer></Footer>
    </Fragment>
    )
  }
}
export default Articles
