import React, { useState } from "react";
import { Transport_Data } from "../utils/data";

interface TransportProps {}

const Transport: React.FC<TransportProps> = ({}) => {
  const [index, setIndex] = useState<number>(0);

  return (
    <section className="transport w-full h-auto min-h-full bg-[url('./assets/transport_bg.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col gap-y-12 m-auto px-0 md:px-20 font-['Barlow_Condensed'] max-w-[72rem]">
        <div className="w-full">
          <div className="w-full text-center md:text-left text-2xl md:text-4xl uppercase">
            <span className="mr-4 md:mr-8">03</span>
            <span className="text-white">Select Your Transportation</span>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row pb-8 md:pb-16">
          <div className="flex flex-col md:flex-row gap-x-12 w-full md:w-3/5 py-8 md:pr-4 md:py-0 order-1 md:-order-none">
            <div>
              <ul className="flex md:flex-col items-center justify-center gap-8">
                {Transport_Data.map((_, i) => (
                  <li
                    key={i}
                    className={`${
                      index === i
                        ? "bg-white text-black border-2 border-emerald-400"
                        : ""
                    } w-[3.5rem] h-[3.5rem] md:w-[4.5rem] md:h-[4.5rem] flex justify-center items-center text-2xl border rounded-full cursor-pointer`}
                    onClick={() => setIndex(i)}
                  >
                    {i + 1}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-start p-6 md:p-0 gap-y-4 md:gap-y-5">
              <span className="text-2xl md:text-4xl font-['Bellefair'] uppercase">
                {Transport_Data[index].type}
              </span>
              <h2 className="text-5xl md:text-[3.5rem] font-['Bellefair'] text-center md:text-left uppercase text-white w-3/4 leading-none">
                {Transport_Data[index].name}
              </h2>
              <p className="text-center md:text-left text-xl md:text-2xl">
                {Transport_Data[index].description}
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center md:text-left w-full md:w-2/5">
            <div className="basis-96 h-56 md:h-auto max-h-[23rem] rounded overflow-hidden">
              <img src={Transport_Data[index].img} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transport;
