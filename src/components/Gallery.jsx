import React, { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const slides = [
  { src: "/1.webp" },
  { src: "/2.webp" },
  { src: "/3.webp" },
  { src: "/4.webp" },
  { src: "/5.webp" },
  { src: "/6.webp" },
  { src: "/7.webp" },
  { src: "/8.webp" },
  { src: "/9.webp" },
  { src: "/10.webp" },
  { src: "/11.webp" },
  { src: "/12.webp" },
  { src: "/13.webp" },
  { src: "/14.webp" },
  { src: "/15.webp" },
  { src: "/16.webp" },
  { src: "/17.webp" },
  { src: "/18.webp" },
  { src: "/19.webp" },
  { src: "/20.webp" },
  { src: "/21.webp" },
  { src: "/22.webp" },
  { src: "/23.webp" },
  { src: "/24.webp" },
  { src: "/25.webp" },
  { src: "/26.webp" },
  { src: "/27.webp" },
  { src: "/28.webp" },
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
    <div >
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
