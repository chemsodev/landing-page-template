import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import icon from "../assets/1.webp";
import icon2 from "../assets/2.webp";
import icon3 from "../assets/3.webp";
import icon4 from "../assets/3.webp";
import icon5 from "../assets/5.webp";
import icon6 from "../assets/6.webp";
import icon7 from "../assets/7.webp";
import icon8 from "../assets/8.webp";
import icon9 from "../assets/9.webp";
import icon10 from "../assets/10.webp";
import icon11 from "../assets/11.webp";
import icon12 from "../assets/12.webp";
import icon13 from "../assets/13.webp";
import icon14 from "../assets/14.webp";
import icon15 from "../assets/15.webp";
import icon16 from "../assets/16.webp";
import icon17 from "../assets/17.webp";
import icon18 from "../assets/18.webp";
import icon19 from "../assets/19.webp";
import icon20 from "../assets/20.webp";
import icon21 from "../assets/21.webp";
import icon22 from "../assets/22.webp";
import icon23 from "../assets/23.webp";
import icon24 from "../assets/24.webp";
import icon25 from "../assets/25.webp";
import icon26 from "../assets/26.webp";
import icon27 from "../assets/27.webp";
import icon28 from "../assets/28.webp";

const slides = [
  { src: icon },
  { src: icon2 },
  { src: icon3 },
  { src: icon4 },
  { src: icon5 },
  { src: icon6 },
  { src: icon7 },
  { src: icon8 },
  { src: icon9 },
  { src: icon10 },
  { src: icon11 },
  { src: icon12 },
  { src: icon13 },
  { src: icon14 },
  { src: icon15 },
  { src: icon16 },
  { src: icon17 },
  { src: icon18 },
  { src: icon19 },
  { src: icon20 },
  { src: icon21 },
  { src: icon22 },
  { src: icon23 },
  { src: icon24 },
  { src: icon25 },
  { src: icon26 },
  { src: icon27 },
  { src: icon28 },
];

function Gallery() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); 

  const handleThumbnailClick = (index) => {
    setOpen(true);
    setCurrentIndex(index);
  };

  const visibleSlides = slides.slice(0, 8);
  const remainingCount = slides.length - 8; 
  const showMoreIndex = 7; 

  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-4">Gallery</h2>
      <div className="grid grid-cols-4 gap-4 w-[80%] mx-auto">
        {visibleSlides.map((slide, index) => (
          <div key={index} className="relative group">
            <img
              src={slide.src}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(index)} 
              className="w-full h-56 object-cover cursor-pointer rounded-lg shadow-md transition-transform transform group-hover:scale-105"
            />
            {index === showMoreIndex && (
              <div
                onClick={() => handleThumbnailClick(11)}
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
