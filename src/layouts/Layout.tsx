import { Layout } from 'antd';
import { BrowserRouter } from "react-router-dom";
import Header from './Header'
import Breadcrumb from './Breadcrumb'
import Sider from './Sider'
import Router from '../routers'

export default function LayoutComponent(props:any) {

  

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <BrowserRouter>
        <Header></Header>
        <Layout>
          <Sider {...props}></Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb {...props}></Breadcrumb>
            <Layout.Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Router/>
            </Layout.Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    </Layout>
  )
}
