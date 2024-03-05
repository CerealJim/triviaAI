"use client";

import React, { useState } from "react";
import styles from "../styles/Home.module.scss";

const reviews = [
  {
    id: 1,
    text: "Fantastic service! Loved using Trivia AI for our events.",
    author: "John Doe",
  },
  {
    id: 2,
    text: "Incredible features and customization options. Highly recommended.",
    author: "Jane Smith",
  },
  // Add more reviews as needed
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.slider}>
      <button className={styles.prevButton} onClick={handlePrev}>
        &#8249;
      </button>
      <div className={styles.slide}>
        <p>{reviews[currentIndex].text}</p>
        <span className={styles.author}>{reviews[currentIndex].author}</span>
      </div>
      <button className={styles.nextButton} onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

export default Slider;
