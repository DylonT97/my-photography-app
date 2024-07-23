import React from "react";

const Gallery = () => {
  return (
    <div
      className="p-8"
      style={{
        backgroundImage: "url('/images/GalleryBG.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <h1 className="text-4xl font-bold text-white">Gallery</h1>
      <p className="text-lg text-white">
        Explore our collection of beautiful photos.
      </p>
    </div>
  );
};

export default Gallery;
