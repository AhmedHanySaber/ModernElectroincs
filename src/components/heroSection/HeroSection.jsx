import React, { useState, useEffect } from "react";

const HeroSection = () => {
    const images = ["../img/hero1.png", "../img/hero2.png", "../img/hero3.png"];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Automatically change image every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    // Function to go to the next image
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Function to go to the previous image
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative">
            <img
                className="w-full h-20h lg:h-full transition-opacity duration-1000"
                src={images[currentImageIndex]}
                alt=""
            />
            {/* Buttons for navigating images */}
            <button
                onClick={prevImage}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2"
            >
                Prev
            </button>
            <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2"
            >
                Next
            </button>
        </div>
    );
};

export default HeroSection;
