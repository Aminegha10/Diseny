import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";

const HeroSection = () => {
  const movies = [
    { id: 1, type: "Kids", Name: "Spirit Untamed", bgImage: "/Movie1.png" },
    { id: 2, type: "Kids", Name: "Wish Dragon", bgImage: "/Movie2.png" },
    {
      id: 3,
      type: "Kids",
      Name: "Raya and the Last Dragon",
      bgImage: "/Movie3.png",
    },
    { id: 4, type: "Kids", Name: "Sponge on the Run", bgImage: "/Movie4.png" },
  ];

  return (
    <div className="Montserrat h-screen bg-[url('/background.png')] bg-cover bg-bottom relative flex flex-col px-[131px] py-[20px] text-white">
      {/* NavBar */}
      <div className="flex justify-between mb-4 z-10">
        <img src="/Logo.svg" alt="" />
        <img src="/Menue.svg" alt="" />
      </div>

      {/* HeroSection */}
      <div className="flex flex-grow justify-between items-center z-10">
        <div className="flex flex-col gap-2">
          {/* Rating */}
          <div className="flex gap-2">
            <img src="/imdb.svg" alt="" />
            <span className="font-bold">8.8</span>
          </div>
          {/* Name & Info */}
          <div className="">2021 - Kids - Movie</div>
          <div>
            <img className="w-[353px]" src="/luca.png" alt="" />
          </div>
          <div className="w-[330px]">
            <p className="leading-[25px]  ">
              Luca and Alberto dream of a life of freedom, a life of adventure —
              and, most of all, a life with a Vespa to ride.
            </p>
          </div>
          <div>
            <button className=" bg-gradient-to-br from-[#0F3A7B] from-100% to-[#0CFFFF] to-90% p-4 rounded-full flex items-center gap-2 text-white">
              <FaPlay className="text-white" />
              Watch Now
            </button>
          </div>
        </div>
        <div className="">
          {/* Movies */}
          <div className="text-[28px] font-bold mb-4"> Movies</div>
          <dev className="flex flex-col gap-4 w-[309px] h-[490px] overflow-auto container">
            {movies.map((movie) => {
              return (
                <div
                  className="w-[265px] h-[149px] flex items-center justify-center relative flex-none rounded-xl"
                  style={{
                    backgroundImage: `url('${movie.bgImage}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <FaPlayCircle className="text-white text-[36px] z-10" />
                  <div className="absolute bottom-3 left-3 z-10">
                    <div className="text-[14px] text-gray-300">
                      {movie.type}
                    </div>
                    <div className="font-bold">{movie.Name}</div>
                  </div>
                  <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t rounded-xl from-[#0E172F] to-[#0e172f07]"></div>
                </div>
              );
            })}
          </dev>
        </div>
      </div>
      <div className="absolute w-[1199px] inset-0 bg-gradient-to-r from-[#0D162E] to-[#0d162e00] "></div>
    </div>
  );
};

export default HeroSection;
