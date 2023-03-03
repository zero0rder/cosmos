import React, { useState } from "react";
import { Dest_Data } from "../utils/data";

interface DestinationsProps {}

const Destinations: React.FC<DestinationsProps> = ({}) => {
  const [index, setIndex] = useState<number>(0);

  return (
    <section className="dest w-full h-auto min-h-full bg-[url('./assets/destination_bg.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col m-auto gap-y-12 px-4 md:px-20 font-['Barlow_Condensed'] max-w-[72rem]">
        <div className="w-full">
          <div className="w-full text-center md:text-left text-2xl md:text-4xl uppercase">
            <span className="mr-4 md:mr-8">01</span>
            <span className="text-white">Choose your destination</span>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col md:flex-row flex-wrap pb-8 md:pb-16">
            <nav className="flex justify-center md:justify-end w-full my-4 md:mb-12 md:mt-0">
              <ul className="flex gap-x-4 md:gap-x-6 md:w-1/2 text-[1rem] md:text-xl">
                {Dest_Data.map((d, i) => (
                  <li
                    key={i}
                    className="cursor-pointer uppercase"
                    onClick={() => setIndex(i)}
                  >
                    <span className="mr-2">0{i}</span>
                    <span className="tracking-[0.2rem]">{d.name}</span>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="w-full md:w-1/2 flex justify-center px-6 -order-1 md:order-[0]">
              <div className="w-[16rem] md:w-[24rem]">
                <img className="m-0" src={Dest_Data[index].img} />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-y-6 md:gap-y-8 md:py-4">
              <h2 className="font-['Bellefair'] text-[4rem] md:text-8xl text-white text-center md:text-left tracking-[0.25rem] uppercase">
                {Dest_Data[index].name}
              </h2>
              <p className="text-[1rem] md:text-xl text-center md:text-left">
                {Dest_Data[index].description}
              </p>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-y-4 md:gap-y-0 gap-x-5 text-2xl py-4 border-t">
                <div className="flex flex-col gap-y-2 text-center md:text-start">
                  <span className="uppercase">Avg. Distance</span>
                  <span className="text-3xl text-white font-['Bellefair']">
                    {Dest_Data[index].stats.distance}
                  </span>
                </div>
                <div className="flex flex-col gap-y-2 text-center md:text-start">
                  <span className="uppercase">Est. Travel Time</span>
                  <span className="text-3xl text-white font-['Bellefair']">
                    {Dest_Data[index].stats.travel_time}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
