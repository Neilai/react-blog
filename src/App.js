import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Login from '@/pages/admin/login'
import Home from './pages/admin/home'
import './index.scss'
import PrivateRoute from './components/PrivateRoute'
import initAxios from './util/axiosConfig'

initAxios()


function App() {
  return (
    <div className="App">
       	<BrowserRouter>
          <Switch>
      	    <PrivateRoute path='/admin/home' component={Home}></PrivateRoute>
            <Route path='/admin/login' component={Login}></Route>
          </Switch>
      	</BrowserRouter>
    </div>
  );
}

export default App;
