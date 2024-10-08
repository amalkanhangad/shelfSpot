import React from 'react'
import FavBookImg from '../assets/favbook1.jpg';
import { Link } from 'react-router-dom';


const FavBook = () => {
  return (
    <div className='flex flex-col md:flex-row px-4 lg:px-24 my-20'>
        <div className='md:w-1/2'>
            <img src={FavBookImg} alt="" className='rounded md:w-10/12 h-10/12'/>
        </div>
        <div className='md:w-1/2 space-y-6'>
            <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find your favourite <span className='text-blue-600'>Book Here!</span></h2>
            <p className='mb-10 text-lg md:5/6 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum officia, culpa dolores odit deleniti porro perferendis nulla ex quos illum ipsa laboriosam quam magnam eum beatae voluptates quidem doloremque officiis.

            </p>
            {/* stats */}
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                <div>
                    <h3 className='text-3xl font-bold '>800+</h3>
                    <p className='text-base'>Book listing</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold '>550+</h3>
                    <p className='text-base'>Register users</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold '>1200+</h3>
                    <p className='text-base'>PDF Downloads</p>
                </div>
            </div>
            <Link to="/shop" className='mt-8 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300 ' >Explore more</button></Link>
        </div>
    </div>
  )
}

export default FavBook
