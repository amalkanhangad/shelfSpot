import React from 'react'
import BannerCard from '../Home/BannerCard';
const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-300 flex items-center">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* left side */}
        <div className="md:w-1/2 space-y-8">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Buy and sell your books{" "}
            <span className="text-blue-700">for the best prices</span>
          </h2>
          <p className="w-4/5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            fuga commodi neque accusantium quos dolores, exercitationem modi
            nemo. Magnam nemo ratione, quod iusto temporibus expedita omnis
            aliquam minima vero ipsa.
          </p>
          <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a book"
              className="py-2 px-2 rounded-sm outline-none "
            />
            <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">
              Search
            </button>
          </div>
        </div>
        {/* right side */}
        <div></div>
      </div>
      <BannerCard></BannerCard>
    </div>
  );
}

export default Banner
