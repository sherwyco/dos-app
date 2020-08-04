import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function PrivateRoute ({ children, ...rest }) {
  const isAuthenticated = useSelector((state) => state.isAuthenticated)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/sign-in',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}
