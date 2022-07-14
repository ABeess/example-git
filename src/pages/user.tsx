import React, { ReactElement } from 'react'
import Layout from '../layouts'

const User = () => {
  return <div>User</div>
}

User.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default User
