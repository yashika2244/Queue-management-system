// src/components/KeyboardSlider.jsx
import React, { useEffect, useState } from "react";

const images = [
 "/design.html"
];

const KeyboardSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-52 md:h-64 bg-white rounded-b-xl overflow-hidden">
      {/* Slides */}
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Keyboard ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out transform ${
            i === index ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        />
      ))}

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
        {images.map((_, i) => (
          <span
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === index ? "bg-emerald-600" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default KeyboardSlider;
