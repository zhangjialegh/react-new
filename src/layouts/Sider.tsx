import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {
  Link,
  useLocation
} from "react-router-dom";
import routes from '../routers/routes'

const { SubMenu } = Menu;

export default function Sider() {
  const location = useLocation()
  const pathname = location.pathname
  const currentRoute = routes.filter(item => pathname.startsWith(item.path))[0]
  const index = currentRoute.routes?.findIndex(item => pathname === item.path)
  return (
    <Layout.Sider collapsible width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={[`${index}`]}
        style={{ height: '100%', borderRight: 1 }}
      >
        {
          currentRoute.routes ?
          currentRoute.routes.map((route: any, i: number) => (
            route.routes && route.routes.length ?
              <SubMenu key={i} icon={<UserOutlined />} title={route.name}>
                {
                  route.routes.map((cmp: any, j: number) => (
                    <Menu.Item key={j} ><Link to={cmp.path}>{cmp.name}</Link></Menu.Item>
                  ))
                }
              </SubMenu> :
              <Menu.Item key={i} ><Link to={route.path}>{route.name}</Link></Menu.Item>
          )) : null
        }
      </Menu>
    </Layout.Sider>
  )
}
