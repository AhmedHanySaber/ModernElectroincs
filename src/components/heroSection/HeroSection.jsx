import React, { useState, useEffect } from "react";

const HeroSection = () => {
    const images = ["../img/hero1.png", "../img/hero2.png", "../img/hero3.png"];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <img
                className="w-full h-20h lg:h-full transition-opacity duration-1000"
                src={images[currentImageIndex]}
                alt=""
            />
        </div>
    );
};

export default HeroSection;
