import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Backdrop from './Backdrop';
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";




const MotionGrid = motion(
  styled(Grid)({
    // You can add additional styles here if needed
  })
);

const dropIn = {
     hidden: {
        y: "-100vh",
        opacity: 0
     },
     visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500
        }
     },
     exit: {
        y: "100vh",
        opacity: 0
     }
}



const ContactModal = ({handleClose, text}) => {
  return (
    <Backdrop onClick={handleClose}>
    <MotionGrid 
    onClick={(e) => e.stopPropagation()} 
    sx={{width: "80%", height: "40vh", padding: "2rem",margin: "auto", borderRadius: "12px", display: "flex", flexDirection: "column", alignItems:"center", color: "white", backgroundColor: "#0379a9" }}
    variants={dropIn}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
    ContactModal
    </MotionGrid>
    </Backdrop>
  )
}

export default ContactModal         