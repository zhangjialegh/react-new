import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../pages/home/Home'
import Todo from '../pages/todo/Todo'


export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/todo">
          <Todo />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
