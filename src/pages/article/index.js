import React, {
  Component,
  Fragment
} from 'react';
import {
  Link
} from 'react-router-dom';
import styles from './index.module.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import axios from 'axios';
import moment from 'moment';
import parseMarkdown from '@/util/parseMarkdown.js'
class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      article: {}
    }
  }
  componentDidMount() {
    const id=this.props.match.params.id
    axios.get(`/articles/${id}`)
      .then(res => {
        let data = res.data[0]
        data.publishTime = moment(data.publishTime).format('YYYY年 MMM DD日 HH:mm:ss')
        data.tags = data.tags ? data.tags.split(',') : []
        this.setState({
          article: data
        });
      })
      .catch(err => alert(err))
  }
  render() {
    return (
      <Fragment>
          <Header></Header>
          <div className="main-container">
    <article className='rendered-article'>
        <header>
          <h1>{this.state.article.title}</h1>
            <p class="time">{this.state.article.publishTime}</p>
            <h4>{
              this.state.article.tags&&this.state.article.tags.map(v=>(
                <span className={styles["tag"]}>{v}</span>
              ))
            }
            </h4>
        </header>
        <p dangerouslySetInnerHTML={{ __html:parseMarkdown(this.state.article.content||'')}}></p>
    </article>
          </div>
            <Footer></Footer>
      </Fragment>
    )
  }
}
export default Article
