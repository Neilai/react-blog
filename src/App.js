import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '@/pages/admin/login'
import Home  from './pages/admin/home'

function App() {
  return (
    <div className="App">
       	<BrowserRouter>
      		<div>
            <Route path='/admin/home' exact component={Home}></Route>
            <Route path='/admin/login' exact component={Login}></Route>
      		</div>
        </BrowserRouter>
    </div>
  );
}

export default App;
