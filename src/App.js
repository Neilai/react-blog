import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Login from '@/pages/admin/login'
import Home from './pages/admin/home'
import './index.scss'
import PrivateRoute from './components/PrivateRoute'
import initAxios from './util/axiosConfig'
import {
  Provider
} from 'react-redux';
import Articles from '@/pages/articles';
import Archives from '@/pages/archives';
import Tags from '@/pages/tags';
import Article from '@/pages/article';
import Me from '@/pages/me';
import store from './store';

initAxios()

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <PrivateRoute path='/admin/home' component={Home}></PrivateRoute>
            <Route path='/admin/login' component={Login}></Route>
            <Route path='/articles' component={Articles}></Route>
            <Route path='/article/:id' component={Article}></Route>
            <Route path='/archives' component={Archives}></Route>
            <Route path='/tags' component={Tags}></Route>
            <Route path='/me' component={Me}></Route>
             <Redirect to='/articles'/>
         </Switch>
    </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
