import React from "react";

import ImageGallery from "react-image-gallery";
import images from "../../data/imagesForVehicleCarousel.json";

import "react-image-gallery/styles/css/image-gallery.css";

const Kombi = () => {
  return (
    <section className="h-screen">
      <ImageGallery items={images} />
    </section>
  );
};

export default Kombi;
