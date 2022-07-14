import React, { ReactElement } from 'react'
import Layout from '../layouts'

const Post = () => {
  return <div>Post</div>
}

Post.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Post
