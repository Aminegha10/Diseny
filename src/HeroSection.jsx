import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";

const HeroSection = () => {
  const movies = [
    { id: 1, type: "Kids", Name: "Spirit Untamed" },
    { id: 2, type: "Kids", Name: "Wish Dragon" },
    { id: 3, type: "Kids", Name: "Raya and the Last Dragon" },
    { id: 4, type: "Kids", Name: "Sponge on the Run" },
  ];

  return (
    <div className="h-screen bg-[url('/background.png')] bg-cover bg-bottom relative flex flex-col px-[131px] py-[20px] text-white">
      {/* NavBar */}
      <div className="flex justify-between ">
        <img src="/Logo.svg" alt="" />
        <img src="/Menue.svg" alt="" />
      </div>

      {/* HeroSection */}
      <div className="flex flex-grow justify-between items-center ">
        <div className="flex flex-col gap-2">
          {/* Rating */}
          <div className="flex gap-2">
            <img src="/imdb.svg" alt="" />
            <span className="font-bold">8.8</span>
          </div>
          {/* Name & Info */}
          <div>2021 - Kids - Movie</div>
          <div>
            <img className="w-[353px]" src="/luca.png" alt="" />
          </div>
          <div className="w-[330px]">
            <p className="leading-[25px] ">
              Luca and Alberto dream of a life of freedom, a life of adventure —
              and, most of all, a life with a Vespa to ride.
            </p>
          </div>
          <div>
            <button className="bg-gradient-to-br from-[#0F3A7B] from-0% to-[#0CFFFF] to-100% p-4 rounded-full flex items-center gap-2 text-white">
              <FaPlay className="text-white" />
              Watch Now
            </button>
          </div>
        </div>
        <div className="">
          {/* Movies */}
          <div className="text-[28px] font-bold mb-4"> Movies</div>
          <dev className="flex flex-col gap-4 w-[309px] h-[510px] overflow-auto">
            {movies.map((movie) => {
              return (
                <div
                  className={`w-[265px] h-[149px] bg-[url('/Movie${movie.id}.png')] flex items-center justify-center  relative flex-none rounded-xl`}
                >
                  <FaPlayCircle className="text-white text-[36px] z-10" />
                  <div className="absolute bottom-3 left-3 z-10">
                    <div className="text-[14px] text-gray-300">
                      {movie.type}
                    </div>
                    <div className="font-bold">{movie.Name}</div>
                  </div>
                  <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t rounded-xl  from-[#0E172F] to-[#0e172f07]"></div>
                </div>
              );
            })}
          </dev>
        </div>
      </div>
      {/* <div className="absolute w-[1199px] inset-0 bg-gradient-to-r from-[#0D162E] to-[#0d162e00] opacity-50"></div> */}
    </div>
  );
};

export default HeroSection;
