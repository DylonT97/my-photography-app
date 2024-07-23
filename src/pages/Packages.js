import React from "react";

const packages = [
  {
    name: "Basic Package:",
    price: "R2000",
    type: "Portrait",
    photos: "20 photos",
    themes: "Standard",
    locations: "Studio",
  },
  {
    name: "Standard Package:",
    price: "R3500",
    type: "Event",
    photos: "20 photos",
    themes: "Custom",
    locations: "Studio or Location",
  },
  {
    name: "Premium Package:",
    price: "R5000",
    type: "Commercial",
    photos: "20 photos",
    themes: "Custom",
    locations: "Any Location",
  },
];

const PackageCard = ({ packageData }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-black flex flex-col items-center">
    <h2 className="text-xl font-bold mb-2">{packageData.name}</h2>
    <p className="text-lg mb-2">Price: {packageData.price}</p>
    <p className="mb-2">Type: {packageData.type}</p>
    <p className="mb-2">Photos: {packageData.photos}</p>
    <p className="mb-2">Themes: {packageData.themes}</p>
    <p>Locations: {packageData.locations}</p>
  </div>
);

const Packages = () => {
  return (
    <div
      className="p-8"
      style={{
        backgroundImage: "url('/images/PackageBG.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <h1 className="text-5xl font-bold mb-6 text-white text-center">
        Packages
      </h1>
      <h2 className="text-xl font-semibold mb-4 text-white text-center">
        Package Types:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <PackageCard key={index} packageData={pkg} />
        ))}
      </div>
    </div>
  );
};

export default Packages;
