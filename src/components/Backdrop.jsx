import React from 'react'
import { motion } from "framer-motion";


const Backdrop = ({children, onClick}) => {
  return (
    <motion.div
    style={{
        display: "flex", position: "absolute", height: "100vh", width: "100%", top: 0, left: 0, justifyContent: "center", alignItems: "center", background: "#000000e1",zIndex: 10
    }}
    onClick={onClick}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    {children}
    </motion.div>
  )
}

export default Backdrop