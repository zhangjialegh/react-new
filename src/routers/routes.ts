import Home from '../pages/home/Home'
import One from '../pages/home/one/One'
import Two from '../pages/home/two/Two'
import Todo from '../pages/todo/Todo'
interface RouterConfig {
  path: string,
  component: any,
  name?:string,
  routes?: Array<RouterConfig>
}

const routes:Array<RouterConfig> = [
  {
    path: "/home",
    component: Home,
    name:'home',
    routes: [{
      path: "/home",
      component: One,
      name: 'one'
    },{
      path: "/home/two",
      component: Two,
      name: 'two'
    }]
  },
  {
    path: "/todo",
    component: Todo,
    name: 'todo',
    routes: [{
      path: "/todo/one",
      component: One,
      name: 'one'
    }]
  }
]

export default routes