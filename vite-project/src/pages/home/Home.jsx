import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/herosection/HeroSection'

const Home = () => {
   
  return (
    <Layout>
      <HeroSection/>
    </Layout>
  )
}

export default Home