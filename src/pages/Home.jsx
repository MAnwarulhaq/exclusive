import React from 'react'
import Herosection from '../components/Herosection'
import Category from '../components/Category'
import Today from '../components/Today'
import BestProduct from '../components/BestProduct'
import Banner from '../components/Banner'
import OurProduct from '../components/OurProduct'
import Footer from '../components/Footer'
import Featured from '../components/Featured'
import Service from '../components/Service'



const Home = () => {
  return (
    <div>
      <Herosection />
      <Today />
      <Category />
      <BestProduct />
      <Banner />
      <OurProduct />
      <Featured />
      <Service />
      {/* <Footer /> */}

    </div>
  )
}

export default Home