import React from "react";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: 'url("/images/moving.gif")',
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full w-full">
        <ReactTyped
          strings={["NexGen Visuals"]}
          typeSpeed={200}
          backSpeed={50}
          loop
          className="text-9xl font-bold font-comforter text-white"
        />
      </div>
    </div>
  );
};

export default Home;
