import React, { useState } from "react";
import { Crew_Data } from "../utils/data";

interface CrewProps {}

const Crew: React.FC<CrewProps> = ({}) => {
  const [index, setIndex] = useState<number>(0);

  return (
    <section className="crew w-full h-auto min-h-full bg-[url('./assets/crew_bg.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col m-auto gap-y-8 px-4 md:px-20 font-['Barlow_Condensed'] max-w-[72rem]">
        <div className="w-full">
          <div className="w-full text-center md:text-left text-2xl md:text-4xl uppercase">
            <span className="mr-4 md:mr-8">02</span>
            <span className="text-white">Meet Your Crew</span>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row pb-8 md:pb-16 gap-y-4 md:gap-y-0 md:h-[31rem]">
          <div className="w-full order-1 md:-order-none md:w-1/2 flex items-center justify-between md:items-start flex-col gap-y-12">
            <div className="flex flex-col gap-y-5 text-center md:text-left">
              <span className="text-2xl md:text-4xl font-['Bellefair'] uppercase">
                {Crew_Data[index].title}
              </span>
              <h2 className="text-4xl md:text-[3.5rem] font-['Bellefair'] uppercase text-white w-full leading-none">
                {Crew_Data[index].name}
              </h2>
              <p className="text-lg md:text-2xl">
                {Crew_Data[index].description}
              </p>
            </div>
            <div>
              <ul className="flex items-center gap-x-4">
                {Crew_Data.map((_, i) => (
                  <li
                    key={i}
                    className={`${
                      index === i ? "bg-white border-2 border-emerald-400" : ""
                    } w-6 h-6 border rounded-full cursor-pointer`}
                    onClick={() => setIndex(i)}
                  ></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="rounded-full overflow-hidden w-56 md:w-96 h-56 md:h-96">
              <img src={Crew_Data[index].img} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crew;
