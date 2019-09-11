import React, {
  Component,
  Fragment
} from 'react';
import {
  Link
} from 'react-router-dom';
import styles from './index.module.scss';
import Header from '@/components/Header';
import axios from 'axios';
import moment from 'moment';
import parseMarkdown from '@/util/parseMarkdown.js'
class Me extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }
  }
  componentDidMount() {
    axios.get(`/briefs`)
      .then(res => {
        console.log(res.data);
        this.setState({
          content: res.data[0].content
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
        <div class="about-container">
            <h1>关于我</h1>
          <p dangerouslySetInnerHTML={{ __html:parseMarkdown(this.state.content)}}></p>
        </div>
    </article>
          </div>
      </Fragment>
    )
  }
}
export default Me
