import React from "react";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <section className="flex w-full h-full home">
      <div className="flex flex-col justify-start md:justify-center items-center pt-12 md:pt-0 px-4 basis-[100%] md:basis-[55%] font-['Barlow_Condensed']">
        <span className="text-[2rem] uppercase text-center">
          Are you ready to travel beyond?
        </span>
        <h1 className="font-['Bellefair'] text-[4rem] md:text-8xl text-white tracking-[0.25rem] uppercase mt-6 mb-8">
          Cosmos
        </h1>
        <p className="text-center px-6 md:px-16 text-xl">
          Now is your once in a lifetime opportunity to journey out into the
          vastness if space. Interstellar travel is now in the palm of your
          hands with the unveiling of our new COSMOS program. Join us in pushing
          the limits of human innovation.
        </p>
      </div>
      <div className="hidden md:block basis-[45%]"></div>
    </section>
  );
};

export default Home;
