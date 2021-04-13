import React, { Component } from 'react'
import { Layout } from 'antd';
import Router from '../routers'

export default class Content extends Component {
  render() {
    return (
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
    )
  }
}
