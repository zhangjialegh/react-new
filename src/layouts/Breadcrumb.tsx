import { Breadcrumb } from 'antd';
import { useLocation } from "react-router-dom";

export default function Breadcrum(props:any) {
  console.log(useLocation(),'matches');
  
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  )
}
