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
import Footer from '@/components/Footer';
import moment from 'moment';
class Archives extends Component {
  constructor(props){
    super(props)
    this.state={
      years:[],
      introductions:{}
    }
  }
  componentDidMount() {
    let years = []
    let introductions = {}
    axios.get('/introductions')
      .then(res => {
        for (let intro of res.data) {
          const introYear = moment(intro.publishTime).year()
          if (years.indexOf(introYear) === -1) {
            years.push(introYear)
           introductions[introYear] = []
          }
          intro.publishTime = moment(intro.publishTime).format('MM-DD')
         introductions[introYear].push(intro)
        }
        this.setState({
          years,
          introductions
        });
      })
      .catch(err => alert(err))
  }
  render() {
    return (
      <Fragment>  
        <Header></Header>
        <div className="main-container">
          <div className={styles['archive-container']}>
            <div>
                <h2>文章归档</h2>
                  {
                    this.state.years.map(v=>(
                      <section>
                        <h4>{v}</h4>
                        <ul class="list">
                         {
                            this.state.introductions[v].map(item=>(
                              <li>
                                  <Link to=''>{item.title}</Link>
                                    &nbsp;&nbsp;
                                  <span class="time">{item.publishTime}</span>
                              </li>
                            )
                          )
                         }
                        </ul>
                      </section>
                    )
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
export default Archives
