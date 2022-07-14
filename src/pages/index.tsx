import { ReactElement } from 'react'
import Layout from '../layouts'
import type { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = (): ReactElement => {
  return <div>Hello Next Js TypeScirps</div>
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
