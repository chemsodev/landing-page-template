import React, { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import image1 from "../assets/1.webp";
import image2 from "../assets/2.webp";
import image3 from "../assets/3.webp";
import image4 from "../assets/4.webp";
import image5 from "../assets/5.webp";
import image6 from "../assets/6.webp";
import image7 from "../assets/7.webp";
import image8 from "../assets/8.webp";
import image9 from "../assets/9.webp";
import image10 from "../assets/10.webp";
import image11 from "../assets/11.webp";
import image12 from "../assets/12.webp";
import image13 from "../assets/13.webp";
import image14 from "../assets/14.webp";
import image15 from "../assets/15.webp";
import image16 from "../assets/16.webp";
import image17 from "../assets/17.webp";
import image18 from "../assets/18.webp";
import image19 from "../assets/19.webp";
import image20 from "../assets/20.webp";
import image21 from "../assets/21.webp";
import image22 from "../assets/22.webp";
import image23 from "../assets/23.webp";
import image24 from "../assets/24.webp";
import image25 from "../assets/25.webp";
import image26 from "../assets/26.webp";
import image27 from "../assets/27.webp";
import image28 from "../assets/28.webp";

const slides = [
  { src: image1 },
  { src: image2 },
  { src: image3 },
  { src: image4 },
  { src: image5 },
  { src: image6 },
  { src: image7 },
  { src: image8 },
  { src: image9 },
  { src: image10 },
  { src: image11 },
  { src: image12 },
  { src: image13 },
  { src: image14 },
  { src: image15 },
  { src: image16 },
  { src: image17 },
  { src: image18 },
  { src: image19 },
  { src: image20 },
  { src: image21 },
  { src: image22 },
  { src: image23 },
  { src: image24 },
  { src: image25 },
  { src: image26 },
  { src: image27 },
  { src: image28 },
];

function Gallery() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlidesCount, setVisibleSlidesCount] = useState(getVisibleSlidesCount());

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlidesCount(getVisibleSlidesCount());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function getVisibleSlidesCount() {
    if (window.innerWidth >= 1024) {
      return 8; 
    } else if (window.innerWidth >= 768) {
      return 6; 
    } else {
      return 4;
    }
  }

  const visibleSlides = slides.slice(0, visibleSlidesCount);
  const remainingCount = slides.length - visibleSlides.length;
  const showMoreIndex = visibleSlides.length - 1;

  const handleThumbnailClick = (index) => {
    setOpen(true);
    setCurrentIndex(index);
  };

  return (
    <div className=" lg:mt-2" >
      <h2 className="text-center text-5xl font-bold  mb-12 ">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[90%] md:w-[80%] mx-auto">
        {visibleSlides.map((slide, index) => (
          <div key={index} className="relative group">
            <img
              src={slide.src}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(index)}
              className="w-full h-52 md:h-56 object-cover cursor-pointer rounded-lg shadow-md transition-transform transform group-hover:scale-105"
            />
            {index === showMoreIndex && remainingCount > 0 && (
              <div
                onClick={() => handleThumbnailClick(showMoreIndex + 1)}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-90 text-white text-3xl font-bold rounded-lg cursor-pointer transition-opacity group-hover:opacity-75 group-hover:scale-105"
              >
                {`+${remainingCount}`}
              </div>
            )}
          </div>
        ))}
      </div>
      <Lightbox
        slides={slides}
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
      />
    </div>
  );
}

export default Gallery;