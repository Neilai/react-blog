import axios from 'axios'
import React,{Component} from 'react'
import {
  Route,
  Redirect,
} from "react-router-dom"


export default function PrivateRoute({ component: Component, ...rest }) {
  let isAuthenticated = !!localStorage.getItem('token')
  console.log(rest)
  return (
    <Route
      {...rest}
      render={props =>
          isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/admin/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}
