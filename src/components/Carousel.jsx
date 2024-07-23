import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";




import "./Carousel.css";

export const Carousel = ({ data = [] }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <Grid sx={{ position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // width: {xs: "350px", sm: "820px"},
      width: {xs: "85vw", sm: "57vw"},
      height: {xs: "35vh", sm: "80vh"}}}
      // height: {xs: "250px", sm: "620px"}}},
      >
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </Grid>
  );
};
