
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Grid, Button, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from "@mui/material/styles";



const ImageSlider = ({ slides }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(handleNextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentSlideIndex]);

  const handleNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <Box sx={{ position: 'relative', width: '100vw', height:{xs: "200px", sm: "500px"}, overflow: 'hidden', marginTop: {xs:"18.5vh", sm: "22.3vh"} }}>
      <AnimatePresence>
        {slides.map((slide, index) => (
          index === currentSlideIndex && (
            <React.Fragment key={index}>
              <motion.img
                src={slide.image}
                alt={`slide ${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
              >
                <Grid item>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 1 }}
                  >
                    <Typography  variant={isSmallScreen ? "h3" : "h4"} align="center" sx={{ color: '#fff' }}>
                      {slide.text}
                    </Typography>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
                  >
                    <Button variant="contained" sx={{bgcolor: "rgb(3, 195, 234)", color: "white"}}>
                      Click to Begin
                    </Button>
                  </motion.div>
                </Grid>
              </Grid>
            </React.Fragment>
          )
        ))}
      </AnimatePresence>
    </Box>
  );
};

export default ImageSlider;
