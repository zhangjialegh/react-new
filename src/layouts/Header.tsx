import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom'
import routes from '../routers/routes'

export default function Header() {
  const location = useLocation()
  if (location.pathname === '/') return null
  const defaultRoute = routes.filter(item => location.pathname.startsWith(item.path))[0]
  return (
    <Layout.Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[defaultRoute.path]}>
        {
          routes.map((route) => (
            <Menu.Item key={route.path}><Link to={route.path}>{route.name}</Link></Menu.Item>
          ))
        }
      </Menu>
    </Layout.Header>
  )
}
