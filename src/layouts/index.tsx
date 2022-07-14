import { ReactElement } from 'react'
import { LayoutType } from '../types/propType'
import DashboardLayout from './dashboard'
import LayoutOnly from './LayoutOnly'

const Layout = ({ children, vairant }: LayoutType): ReactElement => {
  if (vairant === 'only') {
    return <LayoutOnly>{children}</LayoutOnly>
  }

  return (
    <>
      <DashboardLayout>{children}</DashboardLayout>
    </>
  )
}

export default Layout
