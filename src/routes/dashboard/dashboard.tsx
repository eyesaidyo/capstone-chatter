import { Outlet } from 'react-router-dom'
import { DashboardMenu } from '../../components/dashboard-menu/dashboard-menu'
import { DashboardWrapper } from './dashboard-styles'
export const Dashboard=()=>{
  return (
    <DashboardWrapper>
      <DashboardMenu/>
      <Outlet/>
    </DashboardWrapper>
  )
}