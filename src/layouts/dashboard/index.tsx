import { Box, styled } from '@mui/material'
import React from 'react'
import { PropsType } from '../../types/propType'
import SideBar from './SideBar'

const DashboardLayout = ({ children }: PropsType) => {
  const RootStyle = styled(Box)(({ theme }) => ({
    display: 'flex',
  })) as typeof Box

  const MainStyle = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 3, 10, 3),
    flex: 1,
  })) as typeof Box
  return (
    <RootStyle>
      <SideBar />
      <MainStyle>{children}</MainStyle>
    </RootStyle>
  )
}

export default DashboardLayout
