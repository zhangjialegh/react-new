import { Switch, Route, Redirect } from "react-router-dom";
import routes from './routes'


export default function Router() {
  return (
    <Switch>
      <Redirect exact path="/" to={routes[0].path} />
      {
        routes.map((route, index) => {
          return <Route path={route.path} key={route.path + index} render={props => (
            <route.component {...props} routes={route.routes}/>
          )} />
        })
      }
    </Switch>
  )
}
