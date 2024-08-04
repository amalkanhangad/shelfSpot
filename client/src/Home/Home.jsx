import React from 'react'
import Banner from '../components/Banner'
import FavBook from './FavBook'
import Promo from './Promo'
import OtherBooks from './OtherBooks'
import Review from './Review'
import BestSellerBooks from './BestSellerBookd'

const Home = () => {
  return (
    <div >
      <Banner/>
      <BestSellerBooks/>
      <FavBook/>
      <Promo/>
      <OtherBooks/>
      <Review/>
    </div>
  )
}

export default Home
