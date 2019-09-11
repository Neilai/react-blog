import React, {
  Component,
  Fragment,
} from 'react'
import './index.module.scss'
import HomeHeader from '@/components/HomeHeader'
import Sidebar from '@/components/Sidebar'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import List from './list'
import Me from './me'


class Home extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)

  }
  render() {
    return (
      <Fragment>
        <HomeHeader/>
        <Sidebar/>
           <Switch>
             <Route path= '/admin/home/list' component={List} exact/>
             <Route path='/admin/home/me' component={Me} />
             <Redirect to='/admin/home/list'/>
          </Switch>
      </Fragment>
    )
  }
}
export default Home
