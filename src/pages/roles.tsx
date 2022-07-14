import React, { ReactElement } from 'react'
import Layout from '../layouts'

const Roles = () => {
  return <div>Roles</div>
}
Roles.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Roles
