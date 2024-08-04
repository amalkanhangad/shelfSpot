import React from 'react'
import { Link } from 'react-router-dom'

const Promo = () => {
  return (
    <div className='my-16 py-12 bg-teal-100 px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12 '>
            <div className='md:w-1/2'>
                <h2>2023 National Award winner for fiction shortlist</h2>
                <Link to="shop" className='block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Get promo</button></Link>
            </div>
        </div>
      
    </div>
  )
}

export default Promo
