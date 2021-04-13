import React, { Component } from 'react'
import {
  Switch,
  Route
} from "react-router-dom";
class Home extends Component<{ routes?: any }> {
  render() {
    return (
      <>
        {
          this.props.routes ?
            <Switch>
              {this.props.routes.map((route: any, i: number) => (
                <Route
                  exact
                  path={route.path}
                  key={i}
                  render={props => (
                    <route.component {...props} routes={route.routes} />
                  )}
                />
              ))}
            </Switch>
            : null
        }

      </>
    )
  }
}

export default Home
