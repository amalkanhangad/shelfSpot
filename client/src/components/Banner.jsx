import React from 'react'
import BannerCard from '../Home/BannerCard';
import {TypeAnimation} from "react-type-animation";

const content = {
  intro: {
    startDelay: 500,
    sequence: [
      "Buy and sell your books", 2000,
      "for the best prices", 2000
    ],
    deleteDelay: 1000,
    end: [""],
    restartDelay: 2000,
    speed: 50,
    deletionSpeed: 50,
    wrapper: "span",
  },
  preHeader: "text-5xl text-5xl font-bold leading-snug text-blue-700" 
};
const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-300 flex items-center">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* left side */}
        <div className="md:w-2/3 space-y-8">
          {/* <h2 className="text-5xl font-bold leading-snug text-black">
            Buy and sell your books{" "}
            <span className="text-blue-700">for the best prices</span>
          </h2> */}
          <TypeAnimation 
              className={content.preHeader} 
              sequence={[
                content.intro.startDelay,
                ...content.intro.sequence,
                content.intro.deleteDelay,
                ...content.intro.end,
                content.intro.restartDelay,
              ]}
              speed={content.intro.speed}
              deletionSpeed={content.intro.deletionSpeed}
              wrapper={content.intro.wrapper}
              repeat={Infinity}
            />
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
