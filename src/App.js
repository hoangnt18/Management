import logo from './logo.svg';
import './App.css';
import React from 'react';



import HomeTemplate from './template/HomeTemplate'
import AdminTemplate from './template/AdminTemplate'
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import {routesHome, routesAdmin} from './routes' 
import SignIn from './container/SignIn'
import SignUp from './container/SignUp'







function App() {

  const showMeNuHome = routes =>{
    if(routes && routes.length >0){
      return routes.map((item,index)=>{
        return <HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.Component} />
      })
    }
  }

  const showMeNuAdmin = routes =>{
    if(routes && routes.length >0){
      return routes.map((item,index)=>{
        return <AdminTemplate key={index} exact={item.exact} path={item.path} Component={item.Component} />
      })
    }
  }

  return (
    <div>
        <BrowserRouter>
            <Switch>
              {showMeNuHome(routesHome)}
              {showMeNuAdmin(routesAdmin)}
              <Route  path={"/sign-in"}  exact={false}   component={SignIn}/>
              <Route  path= {"/sign-up"} exact={false}   component={SignUp}/> 
            </Switch>
        </BrowserRouter>
    </div>
  )
}

export default App