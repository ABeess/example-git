import React, { ReactElement } from 'react'
import Layout from '../layouts'

const Profile = () => {
  return <div>Profile</div>
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
export default Profile
